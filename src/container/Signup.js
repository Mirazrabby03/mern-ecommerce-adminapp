import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Container, Form, Row, Col, Button} from 'react-bootstrap';
import Input from '../components/UI/input/Input';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions';


const Signup = (props) => {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');

  
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  
  const dispatch = useDispatch();

  const userSignup = (e) =>{
    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    dispatch(signup(user));
  }
  
  if(auth.authenticate){
    return <Redirect to = {`/`}/>
  }

  if(user.loading){
    return <p> Loading..!</p>
  }

  return(
    <div>
        <Layout>
          <Container>
              <Row style={{marginTop: "70px"}}>
                  <Col md={{span: 6, offset: 3}}>
                  <Form onSubmit= {userSignup}>

                      <Row>
                          <Col md ={6}>
                           <Input
                           label ="First Name"
                           placeholder ="Enter your first name"
                           value ={firstName}
                           type="text"
                           onChange = {(e) => setFirstName(e.target.value)}
                           />
                          </Col>
                          <Col md ={6}>
                          <Input
                           label ="Last Name"
                           placeholder ="Enter your last name"
                           value ={lastName}
                           type="text"
                           onChange = {(e) => setLastName(e.target.value)}
                           />  
                          </Col>
                      </Row>

                      <Input
                           label ="Email"
                           placeholder ="Enter your email"
                           value ={email}
                           type="email"
                           onChange = {(e) => setEmail(e.target.value)}
                           />

                        <Input
                           label ="Password"
                           placeholder ="Enter your password"
                           value ={password}
                           type="password"
                           onChange = {(e) =>setPassword(e.target.value)}
                           />
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                  </Col>
              </Row>
          

          </Container>

    </Layout>
    </div>
   )

 }

export default Signup;