import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar className='nav-container' bg="light" expand="md">
        <Navbar.Brand href="#home" className='header-title d-md-block d-lg-none'>Currency Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navbar-brand">Home</Nav.Link>
            <span className="navbar-brand d-none d-md-block">|</span>
            <Nav.Link href="#link" className="navbar-brand">Portfolio</Nav.Link>
            <span className="navbar-brand d-none d-md-block">|</span>
            <Nav.Link href="#link" className="navbar-brand">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;