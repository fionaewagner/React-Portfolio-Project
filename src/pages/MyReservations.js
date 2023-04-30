import { Container, Col, Row, Button } from "reactstrap"
import { getUserBookings } from "../api/booking"
const MyReservations =()=>{
    return(
        <>
            <div className="paralax-four"/>
            <Row>
                <Button onClick={()=>getUserBookings()}>
                    
                </Button>
            </Row>
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
            
                
            </Container>
        
        </>
    )

}

export default MyReservations