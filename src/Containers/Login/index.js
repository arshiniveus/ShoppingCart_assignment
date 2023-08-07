import { Container, Row, Col, Button, CloseButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "../../Containers/Login/index.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function TextControlsExample () {
  const [ formData, setFormData ] = useState({ Email: "", password: "" });
  const navigate = useNavigate();
  const [ ErrorMessage, setErrorMessage ] = useState("");

  console.log("error", ErrorMessage);

  const [ Email, SetEmail ] = useState(localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : []);



  const SubmitForm = () => {
    if ('arshi@gmail.com' == formData.Email && '123' == formData.password) {
      SetEmail(formData);
      localStorage.setItem('loginData', formData.Email);
      console.log("Emailcheck", Email);
      navigate('/');
    } else {
      setErrorMessage("Invalid Email or Password")
    }
  }

  console.log(formData);
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs lg="4">

          <Form className='LoginForm'>
            <Form.Label className="justify-content-md-center"><h1 >Login</h1></Form.Label>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Email address</Form.Label>
              <Form.Control onChange={(e) => setFormData({ ...formData, Email: e.target.value })} value={formData.Email} type="email" name="Email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} name="password" type="password" rows={3} />

            </Form.Group>
            <p className='text-danger'>{ErrorMessage}</p>
            <Button variant='dark' onClick={() => SubmitForm()} className='btn' >Sign in</Button>
            <Button variant='dark' onClick={() => navigate("/")} className='btn1' >View as Guest</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default TextControlsExample;