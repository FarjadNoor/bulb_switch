import React, { Component } from 'react';
import '../../App.css';
import brokenbulb from './brokenbulb.jpg';

class Brokenbulb extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    }

  }

  render() {
    const { user, addForm } = this.state;
    return (
      <div>
      <h1>Bulb Broken</h1>
      <img src={brokenbulb} />     
      </div>
    );
  }
}

export default Brokenbulb;

