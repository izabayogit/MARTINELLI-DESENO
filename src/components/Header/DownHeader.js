import brignoli from "../../assets/images/brignoli.PNG"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineRight} from "react-icons/ai"
import {AiOutlineLeft} from "react-icons/ai"
import { useState } from "react";
import "./index.css"
const DownHeader =()=>{
    const content =["SOLUTIONS", "NEWS", "PROJECTS"];
    const [selectedContent, setSelectedContent]=useState(0);
    let i =0;
    const incrementContent =()=>{
        if(i<content.length){
            i++;
            setSelectedContent(i)
        }
    }
    const decrementContent =()=>{
        if(i>0){
            i--;
            setSelectedContent(i)
        }
    }
    return(
        <div>
        <Navbar  height={100} className="townHead"  >
            <Container>
                <Navbar.Brand  className="brignoli"><img src={brignoli} alt="logo" /></Navbar.Brand>
                <Nav className="nav1">
                    <Nav.Link  className="catalogLinks"><p>CATALOG</p></Nav.Link>
                    <Nav.Link   > 
                        <div className="downRight">
                            <AiOutlineLeft className="leftAi"/>
                            <p className="activeParagraph">SOLUTIONS</p><p className="p">NEWS</p><p className="p">PROJECTS</p>
                            <AiOutlineRight className="rightAi"/>
                        </div>
                        <p className="catalogLinksPhone">CATALOG</p>
                        <div className="downRightPhone">
                           
                            <AiOutlineLeft className="leftAi" onClick={()=>{decrementContent()}}/>
                            <p>{content[selectedContent]}</p>
                            <AiOutlineRight className="rightAi" onClick={()=> {incrementContent()}}/>
                        </div>
                    </Nav.Link>                          
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}
export default DownHeader