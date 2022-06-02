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
    
    return(
    <>
    <Container>
        
    <Formik
          initialValues={{ 
            startDate: new Date(),
            departDate: new Date(),
            occupancy: "",
            room: ""
         }}
          validate={(props, a) => console.log('a',props, a)}
          onSubmit={(values,{ setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values)
              setSubmitting(false);
              window.location.reload()
            }, 400);

          }}

        >
          {({ isSubmitting, values, setFieldValue }) => (
            
              <Form>
                <Row>
                    <Col xs='4'/>
                        <Col xs='4'>
                            <FormGroup>
                            <Label htmlFor='startDate'>
                                    Date of Arrival
                                </Label>
                                <DatePicker 
                                selected={values.startDate}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                                name="startDate"
                                onChange={date => setFieldValue('startDate', date)}
                                />
                            </FormGroup>
                        </Col>

                </Row>
                <Row>
                    <Col xs='4'/>
                        <Col xs='4'>
                            <FormGroup>
                            <Label htmlFor='departDate'>
                                    Date of Departure
                                </Label>
                                <DatePicker 
                                selected={values.departDate}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                                name="departDate"
                                onChange={date => setFieldValue('departDate', date)}
                                />
                            </FormGroup>
                        </Col>

                </Row>

                <FormGroup>
                    <Row>
                        <Col xs='4'/>
                        <Col xs='4'>
                            <Label htmlFor='occupancy'>
                                Occupancy
                            </Label>
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
                            <ErrorMessage name="rating">
                                {(msg)=><p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </Row>
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
                            <Col xs='4'/>
                            <Col xs='4' className='center'>
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
                                <div className='img-overlay-container' key={room.id}>
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

                <Row className='row-content'>
                    <Col>
                        <Button type="submit" className="btn btn-lg  mt-2 mb-4" disabled={isSubmitting}>Reserve Now</Button>
                    </Col>
                </Row>
              </Form>
            
          )}
        </Formik>
        
        </Container>
    
    </>
    )

}

export default ReservationPage