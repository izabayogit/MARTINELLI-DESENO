import {FiUser} from "react-icons/fi";
import logo from "../../assets/images/logo.PNG";
import mobileLogo from "../../assets/images/mobileLogo.PNG"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Burger from "../../components/buttons/Burger"
import "./index.css"
const Header =()=>{
    return(
        <div>
            <Navbar bg="" variant="black" height={110} className="topHead"  >
                <Container>
                    <Navbar.Brand href="#home" className="logo"><img src={logo} alt="logo" className="deskLogo" /><img src={mobileLogo} alt="#" className="mobileLogo"/></Navbar.Brand>
                        <Nav className="">
                            <Nav.Link href="#home" className="">
                                <p>
                                    <FiUser className="navigationIcon"/>
                                    <span className="navigationLinks">LOG IN</span>
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#home" className="navigationLinksBurger"><Burger/></Nav.Link>                          
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header