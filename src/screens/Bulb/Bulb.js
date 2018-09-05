import React, { Component } from 'react';
import '../../App.css';
import bulb from './bulb.jpg';

class Bulb extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div>
      <h1>Bulb Off</h1> 
      <button onClick={this.props.switchOn}>Switch On</button>   
      <button onClick={this.props.breakBulb}>Break The Bulb</button>   
      <br/>
      
      <img src={bulb} />
                
      </div>
    );
  }
}

export default Bulb;

