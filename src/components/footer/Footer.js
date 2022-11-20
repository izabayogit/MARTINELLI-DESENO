import {FiInstagram} from "react-icons/fi";
import {SlSocialFacebook} from "react-icons/sl";
import footerLogo from "../../assets/images/footerLogo.PNG";
import lstLogo from "../../assets/images/lstLogo.PNG";
import italy from "../../assets/images/italy.PNG";
import ciniglia from "../../assets/images/ciniglia.PNG";
import msb from "../../assets/images/msb.PNG";
import kohro from "../../assets/images/kohro.PNG";
import "./index.css";

const Footer=()=>{
    return(
    
            <div className="footer-container">
                <div className="foot-title">
                    <div className="footer-logo">
                        <img src={footerLogo} alt="#" className="footer-lgo"/>
                    </div>
                    <div className="footer-heading">
                        <p className="contact">Contatti</p>
                        <p><FiInstagram/></p>
                        <p><SlSocialFacebook/></p>
                    </div>
                
                </div>
                <div className="contactMobile">
                 <p>Contatti</p>
                </div>


                <div className="footer-middle">
                    <div className="middle1">
                        <p>
                        Dal 1947 lo spirito imprenditoriale<span> MARTINELLIGINETTO </span>si fonda sulle competenze tecniche, l’utilizzo delle tecnologie tessili più avanzate e sulla capacità di mobilitare energie professionali e creative in grado di innovare il prodotto a tutti i livelli.
                        </p>
                    </div>
                    <div className="mid">
                        <div className="middle2">
                            <p>
                                RECHIEDI IL PREMIO
                            </p>
                            <p>
                                filati
                            </p>
                            <p>
                                Tessuti
                            </p>
                            <p>
                                Nobilitazione
                            </p>
                            <p>
                                Editoria
                            </p>

                        </div>
                        <div className="middle3">
                            <p>
                                INNOVAZIONE
                            </p>
                            <p>
                                Creativita e Design
                            </p>
                            <p>
                                Realta Produttiva
                            </p>
                            <p>
                                Vision Digitale
                            </p>
                        </div>
                        <div className="middle4">
                            <p>
                                RESPONSABILITA
                            </p>
                            <p>
                                Economica
                            </p>
                            <p>
                                Ambientale
                            </p>
                            <p>
                                Sociale
                            </p>
                        </div>
                        <div className="middle5">
                            <p>
                                CARRIERA
                            </p>
                            <p>
                                Giovani
                            </p>
                            <p>
                            Scuola lavoro
                            </p>
                            <p>
                                Lavora con noi
                            </p>
                        </div>
                    </div>

                    <div className="midPhone">
                        <div className="middle2">
                            <p>
                                RECHIEDI IL PREMIO
                            </p>
                            <p>
                                filati
                            </p>
                            <p>
                                Tessuti
                            </p>
                            <p>
                                Nobilitazione
                            </p>
                            <p>
                                Editoria
                            </p>

                        </div>
                        <div className="middle3">
                            <p>
                                INNOVAZIONE
                            </p>
                            <p>
                                Creativita e Design
                            </p>
                            <p>
                                Realta Produttiva
                            </p>
                            <p>
                                Vision Digitale
                            </p>
                        </div>                  
                    </div>
                    <div className="midPhone">         
                        <div className="middle4">
                            <p>
                                RESPONSABILITA
                            </p>
                            <p>
                                Economica
                            </p>
                            <p>
                                Ambientale
                            </p>
                            <p>
                                Sociale
                            </p>
                        </div>
                        <div className="middle5">
                            <p>
                                CARRIERA
                            </p>
                            <p>
                                Giovani
                            </p>
                            <p>
                            Scuola lavoro
                            </p>
                            <p>
                            Lavora con noi
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="partnerDiv">
                        <img src={lstLogo} alt="#" className="partner1"/>
                        <img src={italy} alt="#" className="partner2"/>
                        <img src={kohro} alt="#" className="partner3"/>
                        <img src={ciniglia} alt="#" className="partner4"/>
                        <img src={msb} alt="#" className="partner5"/>
                    </div>


                    <div className="partnerDivMobile">
                        <img src={lstLogo} alt="#" className="partner1"/>
                        <img src={italy} alt="#" className="partner2"/>
                    </div>
                    <div className="partnerDivMobile">
                        <img src={kohro} alt="#" className="partner3"/>
                        <img src={ciniglia} alt="#" className="partner4"/>
                    </div>
                    <div className="partnerDivMobile5">
                        <img src={msb} alt="#" className="partner5"/>
                    </div>
                </div>
                <div className="footerEnd">
                    <div className="endleft">
                        <p>
                            Privacy
                        </p>
                        <p>
                            Cookie policy
                        </p>
                    </div>
                    <div className="endright">
                        <p>
                        Martinelli Ginetto S.p.A - C.F. e Partita Iva 03403660164 Cap.Sociale 10.000.000 I.v. REA: BG – 375519
                        </p>
                    </div>

                </div>
                <div className="footerEndMobile">
                <div className="endright">
                        <p>
                        Martinelli Ginetto S.p.A  
                        </p>
                        <p>- C.F. e Partita Iva 03403660164</p>
                        <p>
                        Cap.Sociale 10.000.000 I.v. REA: BG – 375519
                        </p>
                    </div>
                    <div className="endleft">
                        <p>
                            Privacy
                        </p>
                        <p>
                            Cookie policy
                        </p>
                    </div>
                </div>
            </div>
      
    )
}

export default Footer