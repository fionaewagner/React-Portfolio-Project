import { selectAllAmmenities } from "../slices/ammenitiesSlice"
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import '../styles.css'

const AmmenitiesPage =()=>{
    
    const ammenities = useSelector(selectAllAmmenities)
    console.log(ammenities)
    return(
        <Container>
            {ammenities.map((ammenity)=>{
                return ammenity.id % 2 ?(
                    <Row key={ammenity.id} className='row-content' >
                        <Col xs='8'>
                            <img src={ammenity.image} height="500" width="700"/>
                        </Col>
                        <Col sm='4' className="bg-layout">
                            <h1>{ammenity.name}</h1>
                            <p>{ammenity.description}</p>
                        </Col>

                    </Row>
                ):
                    (
                        <Row key={ammenity.id} className='row-content' >
                        <Col sm='4' className="bg-layout">
                            <h1>{ammenity.name}</h1>
                            <p>{ammenity.description}</p>
                        </Col>
                        <Col xs='8'>
                            <img src={ammenity.image} height="500" width="700"/>
                        </Col>
                        

                    </Row>

                    )

            })

            }

        </Container>

    )

}

export default AmmenitiesPage