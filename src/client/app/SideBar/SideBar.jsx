import React from 'react';
import {render} from 'react-dom';
import { Panel } from 'react-bootstrap';

const title = (
  <h3>SideBar title</h3>
);
export default class SideBar extends React.Component{
  render(){
    return(
      <div>
        <Panel header = {title}>
          Sidebar Content using the panel component
        </Panel>
      </div>
    );
  }
}
