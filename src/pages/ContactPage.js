import { Container, Col, Row } from "reactstrap"
import Beach from '../imgs/beach-bg.avif'
import Spa from '../imgs/hotel-spa.jpeg'
import Lobby from '../imgs/hotel-lobby-photo.avif'
import '../styles.css'
const ContactPage =()=>{
    return(
        <>
            <div className="paralax-four"/>
            <Container>
                <Row>
                    <Col className='mb-3'>
                        <h1>Green Palms Hotel</h1>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <p>Greenpalmshotel@gmail.com</p>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col> 
                        <p>202-555-0138</p>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <h1>Keep in Touch</h1>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <p>Visit us on: </p><a  href={"https://www.instagram.com/?hl=en"}>Instagram  </a>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col> 
                        <a href={"https://www.facebook.com/"}>Facebook</a>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col>
                        <img src={Beach} height="500" width="365"/> 
                        <img src={Spa}  height="500"width="365"/> 
                        <img src={Lobby}  height="500"width="365"/> 
                        <h1>We'll see you soon!</h1>
                    </Col>
                </Row>
            
                
            </Container>
        
        </>
    )

}

export default ContactPage