import React from 'react'

let groceryList = [
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
   {
      id: 15,
      selected: false, 
      description: "Meats"
   },
   {
      id: 16,
      selected: false, 
      description: "Milk"
   },
   {
      id: 17,
      selected: false, 
      description: "Noodles"
   },
   {
      id: 18,
      selected: false, 
      description: "Oil"
   },
   {
      id: 19,
      selected: false, 
      description: "Onions"
   },
   {
      id: 20,
      selected: false, 
      description: "Pepper"
   },
   {
      id: 21,
      selected: false, 
      description: "Potatoes"
   },
   {
      id: 22,
      selected: false, 
      description: "Rice"
   },
   {
      id: 23,
      selected: false, 
      description: "Salt"
   },
   {
      id: 24,
      selected: false, 
      description: "Soap"
   },
   {
      id: 25,
      selected: false, 
      description: "Soups"
   },
   {
      id: 26,
      selected: false, 
      description: "Spices"
   },
   {
      id: 27,
      selected: false, 
      description: "Sugar"
   },
   {
      id: 28,
      selected: false, 
      description: "Tea"
   },
   {
      id: 29,
      selected: false, 
      description: "Vegetable"
   },
   {
      id: 30,
      selected: false, 
      description: "Vinegar"
   },
 ]
 export default class GroceryList extends React.Component {
    constructor(props) {
       super(props)
       let filterRef = React.createRef()
       this.state = {groceryList, curId: groceryList.length+1, filterRef, filtered: false}
    }
    pickedItem = (itemId) => {
       this.setState((prevState) => {
          let prevList = [...prevState.groceryList]
          let itemIndex = prevList.findIndex((item) => item.id == itemId)
          prevList[itemIndex] = {...prevList[itemIndex], selected: !prevList[itemIndex].selected,}
          return {groceryList: [...prevList]}
       })
    }
    render() {
       let groceryList = this.state.groceryList
       if (this.state.filtered) {
          groceryList = groceryList.filter(item=>!item.selected)
       }         
         groceryList = groceryList.map((item) => (
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
             {groceryList}
          </div>
                <hr></hr>
       </>
       )
    }
 }