import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
// (1) The Child Component has a callback function passed to it as a prop   
// We pass the handleColorChange prop into a React event handler
// When this function is invoked, the color state of the Parent Component is altered
// Which renders a change in the Parent Component' colour in the browser

// (2) When either Child component is clicked, its own background color changes to a random color
// & its sibling component should change to that same color
// We invoke the Parents setState function here & pass it an argument of a random color
//that will alter the child components state
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
//Use the shared state data passed down from the parent component
// via { this.props.propName }
        style={{backgroundColor: this.props.childColor}}
      ></div>
    )
  }
}

export default Child
