// Code referenced: https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

// commented throughout to show a thorough understanding of the code

import React from 'react';

class DurationExercise extends React.Component {

    state = {
    // boolean value for if the timer is on, default to false
    timerOn: false,
    // time that the timer started
    timerStart: 0,
    // total length of time the timer has been running
    timerTime: 0
    };

    // startTimer function is called when the timer starts
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            // subtract this.state.timerTime fron Date.now() sets the start time to when the timer starts
            timerStart: Date.now() - this.state.timerTime
        });
        // imitializing the timer interval 
        this.timer = setInterval(() => {
            this.setState({
            timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
        };

    // function to stop the timer, setting timer on to false and clearing the interval 
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
        };

    // function to reset the timer, sets timerStart and timerTime back to 0
    resetTimer = () => {
    this.setState({
        timerStart: 0,
        timerTime: 0
    });
    };

    render (){
        // setting this.state.timerTime to timerTime
        const { timerTime } = this.state;
        // concatenating a 0 to the beginning and removing/slicing the rest of the number if it is larger than 2 digits
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);


    return (
        <>
            <h1>{this.props.name}</h1>
            {/* displaying the time variables using template literals */}
            <p>Timer: {minutes} : {seconds} : {centiseconds}</p>

            {/* creating a button that displays only when the timer is not on (timerOn set to false and when the time is 0), when the button is clicked is calls the startTimer function */}
            {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button onClick={this.startTimer}>Start</button>
            )}
            {/* creating a stop button that shows only when the timer is on (set to true), when the button is clicked is calls the stopTimer function */}
            {this.state.timerOn === true && (
            <button onClick={this.stopTimer}>Stop</button>
            )}
            {/* creating a resume button that displays when the timer is on and when the time is greater than 0, when the button is clicked is calls the startTimer function */}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick={this.startTimer}>Resume</button>
            )}
            {/* creating a button that displays when the timer is off and the time is greater than 0, when the button is clicked is calls the restTimer function */}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick={this.resetTimer}>Reset</button>
            )}
        </>
    );
}
}


export default DurationExercise