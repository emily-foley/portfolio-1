//https://codepen.io/tfbrown/pen/zjXvZy
//handling react forms and using event targets - https://www.w3schools.com/react/react_forms.asp

import React from 'react';

class Subtract extends React.Component {
    constructor(props) {
      super(props);
      //setting the initial state of in inputs and result to 0
      this.state = { 
        num1: 0,
        num2: 0,
        result: 0
      };
      this.updateNum1 = this.updateNum1.bind(this);
      this.updateNum2 = this.updateNum2.bind(this);
    }
    
    //creating a function that changes the first number to the user inputted number
    updateNum1(e) {
      if (e.target.validity.valid) {
        //creating a variable and assigning it to the user input
        var newNum1 = +(e.target.value)
        //updating the state to the new input
        this.setState({
            num1: newNum1,
            result: newNum1 - this.state.num2
          }); 
      }
    }
    //creating a function that changes the second number to the user inputted number
    updateNum2(e) {
      if (e.target.validity.valid) {
        //creating a variable for the new second number and assigning it to the user input
        var newNum2 = +(e.target.value)
         //updating the state to the new input
        this.setState({
            num2: newNum2,
            result: this.state.num1 - newNum2
          }); 
      }
    }
  
    render() {
      return (
        <div>
            {/* displaying the name of the object */}
            <h1>{this.props.name}</h1>
          <div>
            <p>Previous Weight</p>
            {/* setting the value of the input to num1, when the input is changed it updates it using hte updateNum1 function */}
            <input value={this.state.num1} onChange={this.updateNum1} step="any" />
          </div>
          <div>
            <p>Current Weight</p>
            {/* setting the value of the input to num2, when the input is changed it updates it using hte updateNum2 function */}
            <input value={this.state.num2} onChange={this.updateNum2} step="any" />
          </div>
          {/* displaying the result */}
          <p class="weightLoss">Weight Loss: {this.state.result} lbs</p>
        </div>
      )
    }  
  }  
  
  
  export default Subtract