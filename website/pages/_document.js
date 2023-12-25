import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
        </Head>
        <body>
            <Main />
            <NextScript />
            <script src="/scripts/vh-fix.js" defer></script>
        </body>
    </Html>
  )
}