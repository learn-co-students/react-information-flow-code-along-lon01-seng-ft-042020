import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {
// Initialize the state of the parent
// Color is initially set to a random color

//To pass data between 'sibling' components (that are both children of the parent)
//We must store a Child components' state in the parent component
  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

// To change the color key of the state we call setState 
//& re-assign the color state (For the parent) to a random color

//We also call setState in the parent component
//to make changes in the shared state of the Children (sibling) components
//In this example, we pass a random color as the argument that will alter the shared state
//This will be invoked in the all the children components that will share this state 
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

// Render the Parent component with inline CSS that makes its background color
//the current value of the states' color key

// We want to run the state altering changeColor() method when a Child component is clicked
//So we pass the state altering callback function as a prop to all Child components
//via propName = { this.callbackFcnName} 

//The shared state for the Child (sibling) components that's stored in the Parent component
//Is passed down to all the Child components (that will share that state) as props
// via  propName = { this.state.stateKey}
  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child childColor={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child childColor={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
