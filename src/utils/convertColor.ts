import Color from 'color';

export function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

export function hslToRgba(hslString: string) {
  // eslint-disable-next-line prettier/prettier
  // const hslValues = hslString.replace('hsl(', '').replace(')', '').replace('%', '').split(',');
  let hslValues = hslString
    .replace('hsl', '')
    .replace('(', '')
    .replace(')', '');

  hslValues = replaceAll(hslValues, '%', '');
  const hslArray = hslValues.split(',');

  const h = Number(hslArray[0]);
  const s: number = Number(hslArray[1]) / 100;
  const l: number = Number(hslArray[2]) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgb(${r},${g},${b}, 0.5)`;
}

export function hexToRGB(hex: string, alpha?: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

export function convertColorToRGBa(colorText: string, alpha?: number) {
  if (colorText.indexOf('#') >= 0) return hexToRGB(colorText, alpha || 1);
  if (colorText.indexOf('hsl') >= 0) return hslToRgba(colorText);

  return 'Valor invalido para converter. Deve ser HEX: #?????? ou HSL: hsl(???, ???%, ???%)';
}

/**
 *
 * @param hslString hsl string to get darken
 * @param percentage percentage to make darken. Between 0 and 1. 0 white; 1 black
 * @returns Return a hsl string.
 */
export function hslDarken(hslString: string, percentage: number) {
  const hslColor = Color(hslString);
  return hslColor.darken(percentage).hsl().string();
}
