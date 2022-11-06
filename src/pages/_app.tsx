// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Styling
import '../../styles/globals.css';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hedonic App</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
