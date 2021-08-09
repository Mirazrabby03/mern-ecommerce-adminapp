import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import './style.css';
import {NavLink} from 'react-router-dom';



const Home = (props) => {
  return(
    <Layout sidebar>
    

        {/* <Jumbotron style={{margin: "5rem", background: "#fff"}} className="text-center">
            <h1>Welome to Admin Dashboard</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </Jumbotron> */}
    </Layout>
   )

 }

export default Home;