import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

//TODO: Это просто шаблон документа, поставляемый некстом
// Лайаут вроде бы не лайаут, тебе предстоит разобраться откуда он вообще лезет, я тк понимаю он не клиентский

const Layout = () => (
  <Html lang="en">
    <Head />
    <body style={{margin:0}}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

Layout.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default Layout;