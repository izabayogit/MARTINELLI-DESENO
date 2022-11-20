import pll from "../../assets/images/pll.jpg"
import "./index.css"
const Section3 = ()=>{
    return(
        <div>
             <div className="product">
                 
                <div className="product-subdiv1">
                 
                    <div >                
                            <p className="content-title">Top bought products</p>        
                            <p className='divContent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>

                            <p  className='divContent'>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis </p>

                            <p  className='divContent'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostr
                            </p >
                        </div>
                </div>
                <div className="product-subdiv2">
                    <div >
                        <img src={pll} alt="#" className='imageDiv ' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section3