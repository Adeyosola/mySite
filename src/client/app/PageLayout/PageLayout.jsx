import React from 'react';
import {render} from 'react-dom';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar.jsx';

export default class PageLayout extends React.Component{
  render(){
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>This is a simple website in React to list my work experience and academic profile. This website will serve as my professional life journal. It will serve as a documentation of the technologies I have used in my profession and it will also serve as my resume for future job applications.</p>
              <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
            </Col>
            <Col xs={6} md={4}>
              <SideBar/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
