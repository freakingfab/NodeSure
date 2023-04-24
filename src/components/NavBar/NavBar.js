import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
export default function NavBar() {
    return (
      <div style={{ background: "var(--secondary-bg)"}}>
            <Navbar >
        <Container>
          <Navbar.Brand style={{color:'var(--font-color)' , fontWeight:'bolder', fontSize:'2rem'}}>NodeSure</Navbar.Brand>
        </Container>
      </Navbar>
        </div>
    );
}