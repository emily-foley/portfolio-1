import logo from './logo.svg';
import './App.css';
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from './components/DurationExercise';
//import LogTask from './components/LogTask';
import React from 'react';

//Creating variables for each screen
const MENU = "menu";
const DURATION = "duration";
const REPETITION = "repetition";
const LOGGER = "logger";

export default class MenuScreen extends React.Component {
  constructor(props){
  super(props)

//Setting default screen to menu and setting the picked exercise to an empty string
  this.state = {
    currentScreen: MENU,
    exercisePicked: " ",
  }
}

//creating an array for each exercise with the assigned type (rep or timer/duration)
render() {
  let objects = [
      { objType: REPETITION, name: "Pushups" },
      { objType: DURATION, name: "Bicycling" },
      { objType: REPETITION, name: "Jumping Jacks" },
      { objType: DURATION, name: "Running" },
      { objType: LOGGER, name: "Meal log" }
    ]
  //if on menu screen, show the text and show buttons with the names of the excercises
  let screen
    if (this.state.currentScreen === MENU) {
      screen =  <>
        <h1>Go Do Something!</h1>
        <p>Select an Exercise</p>
        {objects.map((value) => <li><button onClick ={() => this.setState({currentScreen:value.objType, exercisePicked: value})}>{value.name}</button> </li>)}
       </>

    }else{
      // If on the repetition screen, show the repetition exercise
      if (this.state.currentScreen === REPETITION) {
        
        screen = <RepetitionExercise  {...this.state.exercisePicked}></RepetitionExercise>

      // If not on the menu or repetition screen (if on the duration screen), show the duration exercise
      } else {
        
        if (this.state.currentScreen === DURATION) {
        
        screen = <DurationExercise {...this.state.exercisePicked}></DurationExercise>
        
      }else{

        if (this.state.currentScreen === LOGGER) {
        
          screen = <LogTask {...this.state.exercisePicked}></LogTask>
          
        
      }
    
    }

      return screen 
  }

}
}
}