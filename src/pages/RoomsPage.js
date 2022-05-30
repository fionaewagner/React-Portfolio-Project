import { selectAllRooms } from "../slices/roomsSlice"
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import '../styles.css'

const RoomsPage =()=>{
    const rooms = useSelector(selectAllRooms)
    return(
        <Container>
            {rooms.map((room)=>{
                return room.id % 2 ?(
                    <Row key={room.id} className='row-content' >
                        <Col xs='8'>
                            <img src={room.image} height="500" width="700"/>
                        </Col>
                        <Col sm='4' className="bg-layout">
                            <h1>{room.name}</h1>
                            <p>{room.description}</p>
                        </Col>

                    </Row>
                ):
                    (
                        <Row key={room.id} className='row-content' >
                        <Col sm='4' className="bg-layout">
                            <h1>{room.name}</h1>
                            <p>{room.description}</p>
                        </Col>
                        <Col xs='8'>
                            <img src={room.image} height="500" width="700"/>
                        </Col>
                        

                    </Row>

                    )

            })

            }

        </Container>

    )
    

}

export default RoomsPage