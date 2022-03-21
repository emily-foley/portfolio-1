import React from 'react'

let listItems = [
    {
       id: 1,
       selected: false, 
       description: "Baby Food"
    },
    {
       id: 2,
       selected: false, 
       description: "Bacon"
    },
    {
       id: 3,
       selected: false, 
       description: "Bread"
    },
    {
       id: 4,
       selected: false, 
       description: "Butter"
    },
    {
       id: 5,
       selected: false, 
       description: "Cereal"
    },
    {
       id: 6,
       selected: false, 
       description: "Cheese"
    },
    {
       id: 7,
       selected: false, 
       description: "Cookies"
    },
    {
       id: 8,
       selected: false, 
       description: "Coffee"
    },
    {
       id: 9,
       selected: false, 
       description: "Cream"
    },
    {
       id: 10,
       selected: false, 
       description: "Eggs"
    },
    {
      id: 11,
      selected: false, 
      description: "Flour"
   },
   {
      id: 12,
      selected: false, 
      description: "Frozen Food"
   },
   {
      id: 13,
      selected: false, 
      description: "Fruit"
   },
   {
      id: 14,
      selected: false, 
      description: "Juices"
   },
 ]
 export default class List extends React.Component {
    constructor(props) {
       super(props)
       let filterRef = React.createRef()
       this.state = {listItems, curId: listItems.length+1, filterRef, filtered: false}
    }
    pickedItem = (itemId) => {
       this.setState((prevState) => {
          let prevList = [...prevState.listItems]
          let itemIndex = prevList.findIndex((item) => item.id == itemId)
          prevList[itemIndex] = {...prevList[itemIndex], selected: !prevList[itemIndex].selected,}
          return {listItems: [...prevList]}
       })
    }
    render() {
       let listItems = this.state.listItems
       if (this.state.filtered) {
        listItems = listItems.filter(item=>!item.selected)
       }         
       listItems = listItems.map((item) => (
          <div key={item.id}>
             <label>
                <input ref={this.state.checkRef} type= "checkbox" onChange={() => this.pickedItem(item.id)} defaultChecked={item.selected}></input>
                <span>{item.description}</span>
             </label>
          </div>
         )) 
       return ( 
       <>
          <h1>Only The Basics -- Grocery List</h1>
          <h3>Mark What You Don't Need</h3>
             <label>
                <input ref={this.state.filterRef} type= "checkbox" onChange={() => this.setState((prev) => ({filtered: !prev.filtered}))} defaultChecked={false}></input>
                View Your Cart
             </label>
                <hr></hr>
          <div style={{padding: "5px"}}>
             {listItems}
          </div>
                <hr></hr>
       </>
       )
    }
 }