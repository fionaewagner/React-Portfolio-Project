import { Container, Col, Row, Button } from "reactstrap"
import { Formik, Field, ErrorMessage, Form } from "formik"
import '../styles.css'
import { register } from "../api/auth"
const RegisterPage =()=>{
    return(
        <>
            <div className="paralax-two"/>
            <Container>
            <h1 className="row-content">Register</h1>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={values => {
          register(values.email,values.name,values.password,values.confirmPassword)
        }}
      >
        {formik => (
          <Form>
            <Row className="row-content">
                <Col>
                    <label htmlFor="name">Name</label>
                </Col>
                <Col>
                    <Field type="text" id="name" name="name" />
                </Col>
                <Col>
                    <ErrorMessage name="name" />
                </Col>
            </Row>

            <Row className="row-content">
                <Col>
                    <label htmlFor="email">Email</label>
                </Col>
                <Col>
                    <Field type="email" id="email" name="email" />
                </Col>
                <Col>       
                    <ErrorMessage name="email" />
                </Col>
              
            </Row>

            <Row className="row-content">
                <Col>
            <       label htmlFor="password">Password</label>
                </Col>
                <Col>
                    <Field type="password" id="password" name="password" />
                </Col>
                <Col>
                    <ErrorMessage name="password" />
                </Col>
            </Row>
            <Row className="row-content">
                <Col>
                <label htmlFor="confirmPassword">Confirm Password</label>
                </Col>
                <Col>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                </Col>
                <Col>
                    <ErrorMessage name="confirmPassword"/>
                </Col>
            </Row>
            <Row className="row-content">
                <Col>
                    <Button type="submit">Register</Button>
                </Col>
            </Row>
          </Form>
        )}
      </Formik>

            </Container>
        </>

    )

}

export default RegisterPage