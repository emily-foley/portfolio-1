//https://www.educative.io/blog/react-hooks-tutorial-todo-list

import React from 'react'

//setting to do list to an empty array
let toDoList = []
 
 export default class List extends React.Component {
    constructor(props) {
       super(props)
       //creating refs that can be used later in the component
       let inputRef = React.createRef()
       let filterRef = React.createRef()
       let deleteText = React.createRef()
       // assigning property values to the component
       this.state = {toDoList, curId:toDoList.length + 1, inputRef, filterRef, deleteText, filtered:false, value: this.props.value}
    }
    completeItem = (itemId) => {
       this.setState((prevState) => {
          let prevList = [...prevState.toDoList]
          let itemIndex = prevList.findIndex((item) => item.id === itemId)
          prevList[itemIndex] = {...prevList[itemIndex], completed: !prevList[itemIndex].completed}
          return {toDoList: prevList}
       }) 
    }
    handleKeyPress = (event) => {
       if (event.key === "Enter") {
          this.addToDoItem()
       }
    }
    addToDoItem = () => { 
       let prevValue = this.state.inputRef.current.value
       this.setState(prevState => ({
          toDoList : [...prevState.toDoList,
             {completed:false, description:prevValue, id:prevState.curId}],
             curId: prevState.curId + 1
          }))
       this.state.inputRef.current.value = ""
    }
    //creating a function to remove list items
    removeItem(i) {
        //creating a variable and assigning it to the toDoList property
       var toDoList = this.state.toDoList
       //using splice to remove the item from the array
       toDoList.splice(i, 1)
       this.setState ({
          toDoList : toDoList
       })
    }

    render () {
         //creating a variable and assigning it to the toDoList property
       let toDoList = this.state.toDoList
       if (this.state.filtered) {
           //using the filter methos to return items that are not completed
          toDoList = toDoList.filter(item => !item.completed)
       }
        //creating a checkbox and delete button for each item in the array using the map method
          toDoList = toDoList.map((item) => (
          <div key = {item.id}>
             <label>
                {/* creating a checkbox that shows the item is completed when checked*/}
                <input ref = {this.state.checkRef} type = "checkbox" onChange={() => this.completeItem(item.id)}defaultChecked={item.completed}></input>
                <span style = {item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
                {/* creating a delete button that removes the item when clicked */}
                <button class="deleteButton" onClick = {() => this.removeItem()}>Delete</button>
             </label>
          </div>
       ))
       return (
          <>
             <h1>Workout To Do List</h1>
                <label>
                    {/* when the checkbock is clicked it shows items that are not complete */}
                   <input class="listCheckbox" ref = {this.state.filterRef} type = "checkbox" onChange={() => this.setState({filtered: !this.state.filtered})} defaultChecked={false}></input>
                   Show incomplete items
                </label>
             <div>
               <hr></hr>
               {/* showing the list items  */}
               {toDoList}
             </div>
             <div>
                <input class="listInput" onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></input>
                {/* creating a button that adds an item to the list when clicked */}
                <button class="addExercise" onClick={this.addToDoItem}>Add Exercise</button>
             </div>

          </>
       )
    }
 }