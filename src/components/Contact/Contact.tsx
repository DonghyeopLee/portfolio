import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started with me? </p>
        <p>Contact me whenever.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ko98000@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ko98000@gmail.com">ko98000@gmail.com</a>
        </div>
        <div>
        <a href="tel:+61450399415"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+61450399415">(+61) 0450399415</a>
        </div>  
      </div>
    </Container>
  )
}