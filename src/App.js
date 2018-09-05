import React, { Component } from 'react';
import './App.css';
import Brokenbulb from './screens/Brokenbulb/Brokenbulb'
import Bulb from './screens/Bulb/Bulb'
import Lightbulb from './screens/Lightbulb/Lightbulb'

class App extends Component {
  constructor() {
    super();

    this.state = {
      bulb: false,
      switch: true
    }

    this.switchOn = this.switchOn.bind(this);
    this.switchOff = this.switchOff.bind(this);
    this.breakBulb = this.breakBulb.bind(this);

  }

  switchOn(){
    this.setState({switch: false});
    console.log('On***');
  }

  switchOff(){
    this.setState({switch: true});
    console.log('Off***');
  }

  breakBulb(){
    this.setState({bulb: true});
    console.log('Break***');
  }


  render() {
    // const { bulb, switch } = this.state;
    return (
      <div className="App">
        {this.state.bulb && <Brokenbulb />}
        {this.state.switch && !this.state.bulb && <Bulb switchOn={this.switchOn} breakBulb={this.breakBulb}/>}
        {!this.state.switch && !this.state.bulb && <Lightbulb switchOff={this.switchOff} breakBulb={this.breakBulb}/>}
      </div>
    );
  }
}

export default App;

