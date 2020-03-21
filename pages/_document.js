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
          <meta charset="utf-8" />
          <title>Abi's Remote Birthday</title>
          <meta name="description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta name="image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta itemprop="name" content="Abi's Remote Birthday" />
          <meta itemprop="description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta itemprop="image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta name="og:title" content="Abi's Remote Birthday" />
          <meta name="og:description" content="Video hangout, Netflix Party, Fried Chicken, FUCK MILEY!" />
          <meta name="og:image" content="https://abi-birthday.now.sh/share-card.png" />
          <meta name="og:url" content="https://abi-birthday.now.sh" />
          <meta name="og:site_name" content="Abi's Remote Birthday" />
          <meta name="og:locale" content="en_UK" />
          <meta name="og:type" content="website" />
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
