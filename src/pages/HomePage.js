import { Container, Row } from "reactstrap"
import Hotelpic from '../imgs/hotel-main-pic.jpg'
import '../styles.css'


const HomePage = () =>{
    return(
        <>
        <div className="paralax">
            
        </div>
        <Container>
            <Row>
                <h1>Green Palms Hotel</h1>
                <p> 
                    Originally founded in 1995, this luxury hotel has all the 
                     works you could dream of for your next vacation. 
                    From our unqiue rooms with stunning views of the 
                    grounds, to our realxing pool and spa, there's
                    something here for everyone. 
                    Book your stay today and embark on an experience 
                    you'll never forget.
                </p>
            </Row>
        </Container>
        
        </>
    )

}

export default HomePage