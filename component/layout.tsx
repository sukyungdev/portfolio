import Header from './header';
import Footer from './footer';
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
