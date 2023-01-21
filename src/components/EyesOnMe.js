// Code EyesOnMe Component Here

import React, { Component } from 'react';

class EyesOnMe extends Component {

  handleFocus = () => {
    console.log("Button focused");
  }

  handleBlur = () => {
    console.log("Button blurred");
  } 
  render() {
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes On Me</button>;
  }
}

export default EyesOnMe;
