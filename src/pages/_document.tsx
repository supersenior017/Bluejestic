import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />          
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="viewport-fit=cover" />
          <meta name="author" content="nouthemes" />
          <meta name="keywords" content="Martfury, React, eCommerce, Template" />
          <meta name="description" content="Martfury - React eCommerce Template" />
          <link rel="shortcut icon" href="/assets/img/favicons/icon.png" />
          <link rel="icon" href="/assets/img/favicons/icon.png" sizes="32x32" />
          <link rel="icon" href="/assets/img/favicons/icon.png" sizes="192x192" />
          <link rel="apple-touch-icon-precomposed" href="/assets/img/logo-b.png" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext&display=optional"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
