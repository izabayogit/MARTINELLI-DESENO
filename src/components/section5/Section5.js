import {BsChevronRight} from "react-icons/bs";
import "./index.css";
const Section5=()=>{
    return(<div>
        <div className="section5-container">
            <div className="left-div">
     
            </div>
            <div className="right-div">
                <div className="right-content">
                    <p className="right-content-title"> The best ideas for sofas</p>
                    <p className="right-content-body"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at.</p>
                    <button className="right-button">Show more <BsChevronRight/> </button>
                </div>
            </div>

        </div>
        <div className="section5-containerPhone">
        <div className="right-div">
                <div className="right-content">
                    <p className="right-content-title"> The best ideas for sofas</p>
                    <p className="right-content-body"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at.</p>
                    <div className="buttonDown">
                        <button className="right-button">Show more <BsChevronRight/> </button>
                    </div>
                </div>
            </div>
            <div className="left-div">
     
            </div>
            

        </div>
    </div>)
}
export default Section5