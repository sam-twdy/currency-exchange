import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


  /*    <nav className="navbar navbar-light bg-light">
        <div>
          <h1 className='header-title d-sm-block d-md-none'>Currency Exchange</h1>
        </div>
        <div className='nav-container'>
          <Link className="navbar-brand" to="/">Home</Link>
          <a href='' className="navbar-brand">Portfolio</a>
          <a href='' className="navbar-brand">Contact</a>
        </div>
      </nav>
  */   

function BasicExample() {
  return (
    <Navbar className='nav-container' bg="light" expand="md">
        <Navbar.Brand href="#home" className='header-title d-md-block d-lg-none'>Currency Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navbar-brand">Home</Nav.Link>
            <Nav.Link href="#link" className="navbar-brand">Portfolio</Nav.Link>
            <Nav.Link href="#link" className="navbar-brand">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;