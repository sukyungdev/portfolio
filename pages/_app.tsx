import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Header from '../component/header';
// import Footer from '../component/footer';
// import Layout from '../component/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
