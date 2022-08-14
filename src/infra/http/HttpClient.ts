/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export async function HttpClient(
  url: string,
  { headers, body, ...options }: any,
) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((serverResponse) => {
    // console.log('serverResponse', serverResponse);

    if (serverResponse.ok) {
      return serverResponse.json();
    }

    // console.log('serverResponse', serverResponse.status);
    if (serverResponse.status === 400) {
      return serverResponse;
    }
    throw new Error('Falha em pegar os dados do servidor :(');
  });
}
