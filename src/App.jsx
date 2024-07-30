import "./index.css";
import { Link, Routes, Route } from "react-router-dom";
import { Container, Nav, Navbar, NavbarToggle } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <div>
        {/* NAVBAR */}
        <Navbar expand="lg" className="fixed-top  bg-body-tertiary shadow">
          <Container>
            <Navbar.Brand expand="lg" bg="light" variant="light">
              <Link to="/" className="navbar-brand text-dark fw-semibold">
                IsraelMerlyn
              </Link>
            </Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end w-100">
                <Nav.Link
                  href="/"
                  eventKey="link-event-key active text-uppercase"
                >
                  Inicio
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  eventKey="link-event-key active text-uppercase"
                >
                  Acerca de
                </Nav.Link>{" "}
                <Nav.Link
                  href="/menu"
                  eventKey="link-event-key active text-uppercase"
                >
                  Menu
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  eventKey="link-event-key active text-uppercase"
                >
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* RUTAS */}

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>

        {/* FOOTER */}
       <Footer/>
       
      </div>
    </>
  );
}

export default App;
