import React, { Component } from "react";



class Box extends Component {
  render() {
    return (
      <div className="box" style={{ margin: '20px', display: 'inline-block', height: '100px', width: '100px', backgroundColor: this.props.color}}> </div>
    )
  }
}

export default Box;