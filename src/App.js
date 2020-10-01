import React, { Component } from 'react';
import './style.css'
class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeItem = this.removeItem.bind(this)

  }
  handleChange(e){
    this.setState({
      text : e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.text === ""){
      alert('please add a task')
      return;
    }
    console.log('hioooo');
    const newItem = {
      id: Date.now(),
      text: this.state.text
    }
    this.setState({
      items: this.state.items.concat(newItem),
      text: ''
    })
  }

  handleClick(){
    var input = document.getElementById('input');
    input.value = '';
  }

  removeItem(e){
    // console.log(e.target.innerHTML);
    for(var i=0; i<this.state.items.length; i++){
      console.log(this.state.items[i].text === e.target.innerHTML);
      if(this.state.items[i].text === e.target.innerHTML){
        this.state.items.splice(i,1);
        console.log(this.state.items, 'this.state.items');
        this.setState({
          items: this.state.items
        })
      }
    }
  }

  render(){
    console.log(this.state.text, 'this.state.text');
    console.log(this.state.items, 'this.state.items');
    return (
      <div>

      <h1>You have {this.state.items.length} tasks today</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} id="input"/>
        <button onClick={this.handleClick}>add</button>
        <TodoList items={this.state.items} removeItem={this.removeItem}/>
          <h5>Developed and designed by: Yasmin Hillis</h5>
      </form>

      </div>
    )
  }
}

class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul>
          {this.props.items.map(item => (
            <div>
            <li onClick={this.props.removeItem} key={item.id}>{item.text}</li>
            </div>
          ))}
      </ul>
    )
  }
}


export default TodoApp;
