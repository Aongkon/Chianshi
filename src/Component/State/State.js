// // import React, { Component } from 'react'

// // export default class State extends Component {


// //     constructor(props) {
// //       super(props)
    
// //       this.state = {
// //          num : 0
// //       }
// //     } 

// //     handleIncrement = () => {
// //       console.log("clicked")
// //         this.setState({
// //           num:this.state.num + 1
// //         })
// //     }

// //     handleDecrement = () => {
// //       this.setState ({
// //         num : this.state.num - 1
// //       })
// //     }


    
// //   render() {
// //     const {num} = this.state
// //     return (
// //       <div className="state_div">
// //         <h2>{num}</h2>
// //         <button className="someStyle" onClick={this.handleIncrement} disabled={num===10 ? true:false}> + </button>
// //         <button className="someStyle" onClick={this.handleDecrement} disabled={num===0 ? true:false}> - </button>
// //       </div>
// //     )
// //   }
// // }

import Button from "react-bootstrap/Button";
import React, { Component } from 'react'

export default class State extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       ratting : 0,
       nameString : ""
    }
  }

  valueIncrement = () => {
    // console.log("clicked")
    this.setState({
      ratting : this.state.ratting + 1
    })
  } 

  valueDecrement = () => {
    this.setState({
      ratting : this.state.ratting - 1
    })
  }

  buttonHandler1st = () => {
    this.setState({
      valueForName : this.state.nameString + "Aongkon"
    })
  }

  buttonHandler2nd = () =>{
    this.setState({
      valueForName : this.state.nameString + "Kongkon"
    })
  }

  buttonHandler3rd = () =>{
    this.setState({
      valueForName : this.state.nameString + "Ratul"
    })
  }
  
  buttonHandler4th = () =>{
    this.setState({
      valueForName : this.state.nameString + "Sabrina"
    })
  }
  
  
  render() {
    const {ratting} = this.state
    return (
<div>
      <div className="state_div">
        <Button id="someStyle" variant="primary" onClick={this.valueIncrement} disabled={ratting===10 ? true:false}>+</Button>

        <h2>{ratting} / 10</h2>

        <Button id="someStyle" variant="primary" onClick={this.valueDecrement} disabled={ratting===0 ? true:false}> - </Button>
      </div>
      <div id="clintName">
        <h1>Clint Name: {this.state.valueForName}</h1>
        <span id="forButton">
        <Button variant="primary" onClick={this.buttonHandler1st}>Aongkon</Button>
        <Button variant="primary" onClick={this.buttonHandler2nd}>Kongkon</Button>
        <Button variant="primary" onClick={this.buttonHandler3rd}>Ratul</Button>
        <Button variant="primary" onClick={this.buttonHandler4th}>Sabrina</Button>
        </span>
      </div>
      </div>
    )
  }

}




