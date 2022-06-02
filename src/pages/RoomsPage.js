import { selectAllRooms } from "../slices/roomsSlice"
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import MapList from "../components/MapList";
import '../styles.css'

const RoomsPage =()=>{
    const rooms = useSelector(selectAllRooms)
    return(
        <>
            <div className="paralax-two"/>
            <Container>
                {rooms.map((room)=>{
                    return room.id % 2 ?(
                        <Row key={room.id} className='row-content' >
                            <Col xs='8'>
                                <img src={room.image} height="500" width="700"/>

                            </Col>
                            <Col sm='4' className="bg-layout">
                                <h1 className="mt-5">{room.name}</h1>
                                <p className="mt-3 row-content">{room.description}</p>
                                <MapList obj={room}/>
                            </Col>

                        </Row>
                    ):
                        (
                            <Row key={room.id} className='row-content' >
                            <Col sm='4' className="bg-layout">
                                <h1 className="mt-5">{room.name}</h1>
                                <p className="mt-3 row-content">{room.description}</p>
                                <MapList obj={room}/>
                            </Col>
                            <Col xs='8'>
                                <img src={room.image} height="500" width="700"/>
                            </Col>
                            

                        </Row>

                        )

                })

                }

            </Container>
        </>

    )
    

}

export default RoomsPage