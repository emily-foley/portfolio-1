//https://www.youtube.com/watch?v=PrkxUTEbZmI

import React from 'react';

class LogTask extends React.Component {
    constructor() {
        super()
    
        this.state = { Num1 : 0, Num2 : 0 }
        this.state={ Result : 0 };
    }

    Sum=()=>
    { 
        var N1 = parseInt(this.state.Num1);
        var N2 = parseInt(this.state.Num2);

        var R = N1 + N2;
        this.setState({Result : R});
    }

    render() {
        return (
            <div>
                <input placeholder="Num1" onChangeText={Num1=>this.setState({Num1})}/>
                <input placeholder="Num2" onChangeText={Num2=>this.setState({Num2})}/>
                <button onClick={this.Sum}>Calculate</button>
                <input value={this.state.Result}/>
            </div>
        );
    }

}

export default LogTask