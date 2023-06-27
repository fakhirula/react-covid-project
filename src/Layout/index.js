import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

function Layout(props) {
  return (
      <>
      <Navbar />
        <Container>
          <main>{props.children}</main>
        </Container>
      <Footer />
    </>
  );
}

export default Layout;
