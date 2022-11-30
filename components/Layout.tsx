import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <h1>layout</h1>
      <div>{children}</div>
      <Footer />
    </>
  );
}
