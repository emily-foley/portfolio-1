
import React from 'react';

class LogTask extends React.Component {
    constructor() {
        super()
        //starting count at 0
        this.state = { count: 0}
    }

    render() {
        return (
            <div>
                {/* displaying the name of the exercise with a template literal  */}
                <h1>{this.props.name}</h1>
                {/* displaying the number of reps next to the Reps text */}
                <p>Reps: {this.state.count}</p>
                {/* when the button is clicked, add one to the rep count */}
                <button onClick={() => this.setState({ count: this.state.count + 5 })}>Complete Rep</button>
                {/* When the reset button is clicked, set the rep count to 0 */}
                <button onClick={() => this.setState({ count: 0 })}>Reset</button>
            </div>
        )
    }

}

export default LogTask