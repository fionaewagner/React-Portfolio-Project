import { Container, Row, Col } from "reactstrap"
import '../styles.css'
import HotelRooms from "../imgs/hotel-rooms.jpeg"
import HotelAmmenities from "../imgs/hotel-amenities.jpeg"


const HomePage = () =>{
    return(
        <>
            <div className="paralax"/>
            <Container>
                <Row className="row-content mb-5 pb-4">
                    <Col>
                        <p className="pt-3">Welcome to... </p>
                        <h1 className="mb-5 mt-4">Green Palms Hotel</h1>
                    </Col>
                    <Col xs='6' className="mt-5">
                        <p> Originally founded in 1995, this luxury hotel has all the 
                            works you could dream of for your next vacation. 
                            From our unqiue rooms with stunning views of the 
                            grounds, to our realxing pool and spa, there's
                            something here for everyone. 
                            Book your stay today and embark on an experience 
                            you'll never forget.
                        </p>
                    </Col>
                    
                    
                </Row>
                <Row className="row-content mt-5 pt-5">
                    <Col sm='3' className="bg-layout">
                    <h1>Explore Rooms</h1>
                    <p>Here at Green Palms Hotel, we offer a variety of different
                        rooms. You'll love our deluxe rooms with choice of a single King bed
                        or two Queens. Or, try our luxurious Master Suite with all the amenities
                        one could dream of.
                    </p>
                        
                    </Col>
                    <Col xs='3'>
                        <img src={HotelRooms} height="350" width="250"/>
                        
                    </Col>
                    <Col sm='3' className="bg-layout">
                        <h1>Explore Amenities</h1>
                        <p>Take a dip in our luxury pool, or visit our relaxing spa during
                            open hours. You will also be grated 24/7 access to our high-end Fitness
                            Center with an astounding variety of equipment. Or, learn about
                            our daily free continental breakfast served each morning at
                            Eight.
                        </p>
                       
                    </Col>
                    <Col >
                        <img src={HotelAmmenities}height="350" width="250"/>
                        
                    </Col>
                </Row>
            </Container>
        
        </>
    )

}

export default HomePage