import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar className='nav-container' bg="light" expand="md">
        <Navbar.Brand href="./" className='header-title d-md-block d-lg-none'>Currency Exchange</Navbar.Brand>
        {/*<Link to="/"><span href="#home" className='header-title d-md-block d-lg-none'>Currency Exchange</span></Link>*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./" className="navbar-brand">Currency Exchange</Nav.Link>
            <span className="navbar-brand d-none d-md-block">|</span>
            <Nav.Link href="./currencyconverter?base=USD&quote=AUD" className="navbar-brand">Currency Converter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
