import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* FONT */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" crossOrigin="anonymous"/>
        {/* FONT ICON */} <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" crossOrigin="anonymous"/>
        {/* BOOTSTRAP */} <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" />
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp