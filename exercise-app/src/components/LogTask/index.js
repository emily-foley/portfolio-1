
import React from 'react';

class LogTask extends React.Component {
    constructor() {
        super()
    
        this.state = { Num1: 0, Num2: 0 }
    }

    Sum=()=>
    { 
        var N1=parseInt(this.state.Num1);
        var N2=parseInt(this.state.Num2);

        var R=N1+N2;
        alert(R);
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Num1" onChangeText={Num1=>this.setState({Num1})}/>
                <TextInput placeholder="Num2" onChangeText={Num2=>this.setState({Num2})}/>
                <Button title="Sum" onPress={this.Sum}/>
            </View>
        );
    }

}

export default LogTask