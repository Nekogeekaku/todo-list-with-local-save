import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Item from './Item/Item';
import ItemForm from './ItemForm/ItemForm';

class App extends Component {
  state = {
    items:[]
  };
  //https://gist.github.com/gordonbrander/2230317
  ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.round((Math.random() * 36 ** 12)).toString(36);
  };
  componentDidMount() {
    const state = localStorage.getItem('state')
    if (state) {
      this.setState(JSON.parse(state))
    } else {
      const items=[
        {id:'random1', content: 'Please create' },
        {id:'random2', content: 'your own list' },
      ];
      this.setState({
        items: items
      })
    }
  }


  saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(this.state))
  }
  deleteHandler=(event,id)=>{
    const items = [...this.state.items];
    const itemIndex = items.findIndex(it=>{
      return it.id===id;
    });
    items.splice(itemIndex,1);
    this.setState({
      items: items
    },
    this.saveStateToLocalStorage);
  };
  submitTaskHandler = (args)=>{
    console.log("submitTaskHandler  !");
    const items = [...this.state.items];
    items.push({
      id:this.ID(), 
      content: args 
    });

    this.setState({
      items: items
    },
    this.saveStateToLocalStorage);
  };
  render(){

const items = this.state.items.map((item,index)=>{
  return (
    <Item 
    content={item.content} 
    click={(event=>this.deleteHandler(event,item.id))}
    key={item.id}/>
  )
})

    return (
      <div className="App">
        <Header/>
        {items}
        <ItemForm submitTask={this.submitTaskHandler}/>
      </div>
    );
  }
  
}

export default App;
