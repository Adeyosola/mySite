import React from 'react';
import {render} from 'react-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import AppBar from './AppBar/AppBar.jsx';

class App extends React.Component {
  render () {
    return(
    <div>
    <AppBar/>
    <p> Hello React!</p>
    <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
    </div>
    ) ;

  }
}

render(<App/>, document.getElementById('app'));
