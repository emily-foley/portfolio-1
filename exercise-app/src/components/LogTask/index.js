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

import React from 'react';

class LogTask extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        num1: 0,
        num2: 0,
        result: 0
      };
      this._changeNum1 = this._changeNum1.bind(this);
      this._changeNum2 = this._changeNum2.bind(this);
    }
    
    _changeNum1(e) {
      if (e.target.validity.valid) {
        var newNum1 = +(e.target.value)
        this.setState({
            num1: newNum1,
            result: newNum1 - this.state.num2
          }); 
      }
    }
    
      _changeNum2(e) {
      if (e.target.validity.valid) {
        var newNum2 = +(e.target.value)
        this.setState({
            num2: newNum2,
            result: this.state.num1 - newNum2
          }); 
      }
    }
  
    render() {
      return (
        <div>
          <div>
            <p>Previous Weight</p>
            <input value={this.state.num1} onChange={this._changeNum1} step="any" />
          </div>
          <div>
            <p>Current Weight</p>
            <input value={this.state.num2} onChange={this._changeNum2} step="any" />
          </div>
          <p>Weight Loss: {this.state.result} lbs</p>
        </div>
      )
    }  
  }  
  
  
  export default LogTask