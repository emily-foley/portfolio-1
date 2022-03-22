// //https://www.youtube.com/watch?v=PrkxUTEbZmI

// import React from 'react';

// class LogTask extends React.Component {
//     constructor() {
//         super()
    
//         this.state = { Num1 : 0, Num2 : 0 }
//         this.state = { Result : 0 };
//     }

//     Sum=()=>
//     { 
//         var N1 = parseInt(this.state.Num1);
//         var N2 = parseInt(this.state.Num2);

//         var R = N1 + N2;
//         this.setState({Result : R});
//     }

//     render() {
//         return (
//             <div>
//                 <input placeholder="Num1" onChange={Num1=>this.setState({Num1})}/>
//                 <input placeholder="Num2" onChange={Num2=>this.setState({Num2})}/>
//                 <button onClick={this.Sum}>Calculate</button>
//                 <p>{this.state.Result}</p>
//             </div>
//         );
//     }

// }

// export default LogTask




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
            <h1>{this.props.name}</h1>
          <div>
            <p>Previous Weight</p>
            <input value={this.state.num1} onChange={this.updateNum1} step="any" />
          </div>
          <div>
            <p>Current Weight</p>
            <input value={this.state.num2} onChange={this.updateNum2} step="any" />
          </div>
          <p class="weightLoss">Weight Loss: {this.state.result} lbs</p>
        </div>
      )
    }  
  }  
  
  
  export default Subtract