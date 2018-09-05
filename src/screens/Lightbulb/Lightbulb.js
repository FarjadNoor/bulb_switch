import React, { Component } from 'react';
import '../../App.css';
import lightbulb from './lightbulb.webp';


class Lightbulb extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    const { user, addForm } = this.state;
    return (
      <div>
        <h1>Bulb On</h1>
        <button onClick={this.props.switchOff}>Switch Off</button>
        <button onClick={this.props.breakBulb}>Break The Bulb</button>   
        <br/>
        <img src={lightbulb} />

      </div>
    );
  }
}

export default Lightbulb;

