import { selectAllAmmenities } from "../slices/ammenitiesSlice"
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import '../styles.css'
import MapList from "../components/MapList";

const AmmenitiesPage =()=>{
    
    const ammenities = useSelector(selectAllAmmenities)
    console.log(ammenities)
    return(
        <>
            <div className="paralax-three"/>
            <Container>
                {ammenities.map((ammenity)=>{
                    return ammenity.id % 2 ?(
                        <Row key={ammenity.id} className='row-content' >
                            <Col xs='8'>
                                <img src={ammenity.image} height="500" width="700"/>
                            </Col>
                            <Col sm='4' className="bg-layout">
                                <h1 className="mt-5">{ammenity.name}</h1>
                                <p className="mt-3 row-content">{ammenity.description}</p>
                                <MapList obj={ammenity}/>
                            </Col>

                        </Row>
                    ):
                        (
                            <Row key={ammenity.id} className='row-content' >
                            <Col sm='4' className="bg-layout">
                            <h1 className="mt-5">{ammenity.name}</h1>
                                <p className="mt-3 row-content">{ammenity.description}</p>
                                <MapList obj={ammenity}/>
                            </Col>
                            <Col xs='8'>
                                <img src={ammenity.image} height="500" width="700"/>
                            </Col>
                            

                        </Row>

                        )

                })

                }

            </Container>
        </>

    )

}

export default AmmenitiesPage