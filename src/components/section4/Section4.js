import {BsArrowRight,BsArrowLeft} from "react-icons/bs";
import {AiOutlineRight} from "react-icons/ai"
import {AiOutlineLeft} from "react-icons/ai"
import "./index.css"
const Section4 =()=>{
    return(
        <div>
            <div className="section4-container">
                <div className="contentTrue">
                <div className="textDiv">
                    <p className=" product-title">Products you might like</p>
                    <p className="icons"><span><BsArrowLeft className="left-icon"/> < BsArrowRight className="right-icon"/> </span></p>
                </div>
                <div className="section4-inner">
                    <div className="innerContent1">

                    </div>
                    <div className="innerContent2">

                    </div>
                    <div className="innerContent3">

                    </div>
                    <div className="innerContent4">

                    </div>
                   
                    <div className="innerContent5">

                    </div>
                    </div>
                </div>
                <div className="productFooter">
                    <div className="lowerSections">
                        <div className="lowerdec">
                            <div className="productDesc">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className=" markers">
                                <p className="red"></p>
                                <p className="gray"></p>
                                <p className="green"></p>
                                <p className="brown"></p>
                                <p className="count"> <span className="superscript">+</span>14</p>
                            </div>
                            </div>
                            <div className="lastDiv">
                                <div className="productDesc">
                                    Lorem 
                                </div>
                                <div className=" markers">
                                <p className="red"></p>
                                </div>
                            </div>
                    </div>
                    <div className="pagination">
                        <p className=" left"><AiOutlineLeft className="countIcons "/></p>
                        <span className="active">1</span>
                        <span className="inactive">2</span>
                        <span className="inactive">3</span>
                        <span className="inactive">4</span>
                        <p className="right"><AiOutlineRight className="countIcons "/></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section4