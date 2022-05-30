import { useDispatch } from 'react-redux';
import {Button, Container, FormGroup, Label, Col, Row} from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker"
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import { selectAllRooms } from "../slices/roomsSlice"
import { useSelector } from 'react-redux';
import '../styles.css'

const ReservationPage =()=>{
    const rooms = useSelector(selectAllRooms)
    const dispatch = useDispatch()

    const handleSubmit=(values)=>{
        console.log(values)
    }
    const [startDate, setStartDate] = useState(new Date());
    const [departDate, setDepartDate] = useState(new Date());
    return(
    <>
    <Container>
        
        <Formik   initialValues={{
                    rating: undefined,
                    
                }}  
                onSubmit={handleSubmit}>
            <Form>
                <FormGroup>
                    <Label htmlFor='arrive'>
                        Date of Arrival
                    </Label>
                    <DatePicker name='arrive' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <ErrorMessage name="depart">
                        {(msg)=><p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='depart'>
                        Date of Departure
                    </Label>
                    <DatePicker name='depart' selected={departDate} onChange={(date) => setDepartDate(date)} />
                    <ErrorMessage name="depart">
                        {(msg)=><p className='text-danger'>{msg}</p>}
                    </ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='occupancy'>
                        Occupancy
                    </Label>
                    <Row>
                        <Col xs='5'/>
                        <Col xs='2'>
                            <Field
                                name='occupancy'
                                as='select'
                                className='form-control'
                                >
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                        </Col>
                    </Row>
                    <ErrorMessage name="occupancy">
                                {(msg)=><p className='text-danger'>{msg}</p>}
                    </ErrorMessage>

                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col>
                            <Label htmlFor='room'>
                                Room
                            </Label>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs='5'/>
                        <Col xs='2' className='center'>
                            <Field 
                                name='room'
                                as='select'
                                className='form-control'
                                >
                                <option>Select...</option>
                                <option>King Room</option>
                                <option>Double Queen Room</option>
                                <option>Master Suite</option>
                            </Field>
                        </Col>
                        
                    </Row>
                    
                    <Row className='mt-5'>
                        <Col>
                        {rooms.map((room)=>{
                            return(
                                <div className='img-overlay-container'>
                            <img className="add-border" src={room.image} height="250" width="350"/>
                            <p className='img-overlay'>{room.name}</p>
                            </div>
                            )
                        })}
                        </Col>
                    </Row>
                    <ErrorMessage name="room">
                                {(msg)=><p className='text-danger'>{msg}</p>}
                    </ErrorMessage>

                </FormGroup>

            </Form>
        </Formik>
        
        </Container>
    
    </>
    )

}

export default ReservationPage