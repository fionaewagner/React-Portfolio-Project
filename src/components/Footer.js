import { Col, Container, Row } from "reactstrap"
import '../styles.css'

const Footer = ()=>{
    return(

        <Container>
                <Row>
                    <Col>
                        <h4>Contact</h4>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <p>202-555-0138</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Greenpalmshotel@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Visit us on:</p><a href="https://www.instagram.com/?hl=en">Instagram  </a> || <a href="https://www.facebook.com/">Facebook</a>
                    </Col>
                </Row>
        </Container>
    )
}

export default Footer