
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
                <TextInput/>
            </div>
        )
    }

}

export default LogTask