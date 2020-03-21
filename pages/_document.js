import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta name="image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta itemProp="name" content="Abi's Remote Birthday" />
          <meta itemProp="description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta itemProp="image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta name="og:title" content="Abi's Remote Birthday" />
          <meta name="og:description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta name="og:image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta name="og:url" content="https://abi-birthday.now.sh" />
          <meta name="og:site_name" content="Abi's Remote Birthday" />
          <meta name="og:locale" content="en_UK" />
          <meta name="og:type" content="website" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#1c4b81" />

          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
