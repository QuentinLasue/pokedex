import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <header className='mb-5'>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <Image 
                            width="120"
                            height="60"
                            src='https://th.bing.com/th/id/R.d5f28cb2bccb6ae1a5b3d5ece9c7e856?rik=QoVFY3l1R6i%2bMg&pid=ImgRaw&r=0'
                        />
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">
                        <Button>Pokédex</Button>
                    </Link>
                    <Link to="/favoris">
                        <Button>Favoris</Button>
                    </Link>
                </Nav>
                
            </Container>
        </Navbar>
    </header>
  );
  }

export default NavBar;