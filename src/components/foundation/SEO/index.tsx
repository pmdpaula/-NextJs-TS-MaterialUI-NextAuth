import Head from 'next/head';

interface SEOProps {
  headTitle?: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SEO = ({ headTitle }: SEOProps) => {
  const hasheadTitle = Boolean(headTitle);

  const baseTitle = 'AxeBlade Software - SISCOINTI';
  const title = hasheadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  // eslint-disable-next-line prettier/prettier
  const description = 'Aplicação do Sistema de Controle de Infraestrutura de TI';
  // const urlBase = 'https://instalura-pmdpaula.vercel.app';
  // const image = '/seo.jpg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={urlBase} /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content={urlBase} /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content={image} /> */}
    </Head>
  );
};

export default SEO;
