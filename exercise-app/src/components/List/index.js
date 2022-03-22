// import React from 'react'

// let listItems = [
//     {
//        id: 1,
//        selected: false, 
//        description: "Baby Food"
//     },
//     {
//        id: 2,
//        selected: false, 
//        description: "Bacon"
//     },
//     {
//        id: 3,
//        selected: false, 
//        description: "Bread"
//     },
//     {
//        id: 4,
//        selected: false, 
//        description: "Butter"
//     },
//     {
//        id: 5,
//        selected: false, 
//        description: "Cereal"
//     },
//     {
//        id: 6,
//        selected: false, 
//        description: "Cheese"
//     },
//     {
//        id: 7,
//        selected: false, 
//        description: "Cookies"
//     },
//     {
//        id: 8,
//        selected: false, 
//        description: "Coffee"
//     },
//     {
//        id: 9,
//        selected: false, 
//        description: "Cream"
//     },
//  ]
//  export default class List extends React.Component {
//     constructor(props) {
//        super(props)
//        let filterRef = React.createRef()
//        this.state = {listItems, curId: listItems.length+1, filterRef, filtered: false}
//     }
//     pickedItem = (itemId) => {
//        this.setState((prevState) => {
//           let prevList = [...prevState.listItems]
//           let itemIndex = prevList.findIndex((item) => item.id == itemId)
//           prevList[itemIndex] = {...prevList[itemIndex], selected: !prevList[itemIndex].selected,}
//           return {listItems: [...prevList]}
//        })
//     }
//     render() {
//        let listItems = this.state.listItems
//        if (this.state.filtered) {
//         listItems = listItems.filter(item=>!item.selected)
//        }         
//        listItems = listItems.map((item) => (
//           <div key={item.id}>
//              <label>
//                 <input ref={this.state.checkRef} type= "checkbox" onChange={() => this.pickedItem(item.id)} defaultChecked={item.selected}></input>
//                 <span>{item.description}</span>
//              </label>
//           </div>
//          )) 
//        return ( 
//        <>
//           <h1>Only The Basics -- Grocery List</h1>
//           <h3>Mark What You Don't Need</h3>
//              <label>
//                 <input ref={this.state.filterRef} type= "checkbox" onChange={() => this.setState((prev) => ({filtered: !prev.filtered}))} defaultChecked={false}></input>
//                 View Your Cart
//              </label>
//                 <hr></hr>
//           <div style={{padding: "5px"}}>
//              {listItems}
//           </div>
//                 <hr></hr>
//        </>
//        )
//     }
//  }

import React from 'react'

let toDoList = []
 
 export default class List extends React.Component {
    constructor(props) {
       super(props)
       let inputRef = React.createRef()
       let filterRef = React.createRef()
       let deleteText = React.createRef()
       this.state = {toDoList, curId:toDoList.length+1, inputRef, filterRef, deleteText, filtered:false, value: this.props.value}
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
             curId: prevState.curId+1
          }))
       this.state.inputRef.current.value = ""
    }
    removeItem(i) {
       var toDoList = this.state.toDoList
       toDoList.splice(i, 1)
       this.setState ({
          toDoList : toDoList
       })
    }

    render () {
       let toDoList = this.state.toDoList
       if (this.state.filtered) {
          toDoList = toDoList.filter(item => !item.completed)
       }
          toDoList = toDoList.map((item) => (
          <div key = {item.id}>
             <label>
                <input ref = {this.state.checkRef} type = "checkbox" onChange={() => this.completeItem(item.id)}defaultChecked={item.completed}></input>
                <span style = {item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
                <button class="deleteButton" onClick = {() => this.removeItem()}>Delete</button>
             </label>
          </div>
       ))
       return (
          <>
             <h1>Workout To Do List</h1>
                <label>
                   <input class="listCheckbox" ref = {this.state.filterRef} type = "checkbox" onChange={() => this.setState({filtered: !this.state.filtered})} defaultChecked={false}></input>
                   Show uncompleted items
                </label>
             <div>
               <hr></hr>
               {toDoList}
             </div>
             <div>
                <input class="listInput" onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef}></input>
                <button class="addExercise" onClick={this.addToDoItem}>Add Exercise</button>
             </div>

          </>
       )
    }
 }