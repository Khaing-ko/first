/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*

import React from "react";
class Item extends React.Component{
  render(){
    return(
      <li>
        {this.props.name},
        ${this.props.price}
      </li>
    );
  }
}

class App extends React.Component{
  state = {
    items: [
      { id: 1, name : 'Apple', price : "9"},
    ]
  }

  add = (name, price) => {
    let id = this.state.items.length +1;
    this.setState( { 
      items: [
        ...this.state.items,
        {id,name,price}
      ]
    });
  }

  render(){
    return(
      <div>
        <h1>Hello </h1>
        <ul>
          {this.state.items.map(i=> {
            return (
              <Item
              id = {i.id}
              name = {i.name}
              price = {i.price}
              />
            )
          })}
        </ul>
        <AddForm add = {this.add} />
      </div>
    )
  } 
}

class AddForm extends React.Component{
  nameRef = React.createRef();
  priceRef  = React.createRef();

  add = () =>  {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name,price);
  }
  
  render() {
    return(
      <div>
        <input type="text" ref = {this.nameRef} /><br />
        <input type="text" ref  = {this.priceRef} /><br />
        <button onClick={this.add} >Add</button>
      </div>
    )
  }
}


import React from "react";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header name = "Hello React" />
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return(
      <div>
        <Title name = {this.props.name} />
      </div>
    )
  }
}

class Title extends React.Component{
  render(){
    return(
      <h1>{this.props.name}</h1>      
           
      )
  }
}
*/
/*
import React,{createRef, useState} from "react";

const Item = ({name,price}) => (
  <li>
    {name},
    $ {price}
  </li>
)

const App = props => {
  
  let [items,setItems] = useState([
    {id:1, name:"Apple", price:"$100"},
    {id:2, name:"Orange", price:"$50"},
    ])

    let nameRef = createRef();
    let priceRef= createRef();
    
    let add = () => {
      let id = items.length+1;
      let name = nameRef.current.value;
      let price = priceRef.current.value;
    
      
      setItems([
        ...items,
        {id,name,price}
      ]);
    }

      return(
        <div>
          <h1>Hello</h1>
          <ul>
             {items.map (i => 
              <Item key = {i.id}
              name = {i.name}
              price = {i.price}
              />
              ) 
             }
          </ul>

          <input type="text" ref={nameRef} /><br />

          <input type="text" ref={priceRef} /><br />
          <button onClick={add}>ADD</button>
        </div>
      )

            }
            */



  /*          
import React, { useState } from "react";

const MyContext = React.createContext();

const App = props => {
  let [counter, setCounter] =useState(5)
  return(
  <MyContext.Provider value = {{counter, setCounter}}>
    <h1>{counter}</h1>
    <Header />
  </MyContext.Provider>
  )
}

const Header = props => {
  return <Title />
}

const Title = props => {
  const {counter, setCounter} = React.useContext(MyContext);
  
  return (
    <div>

      <button onClick={() => setCounter(counter+1)} >Add </button>
      
    </div>
  )
}
*/

/* 
import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
 } from "react-router-dom";

const users = [
  { id: 1, name: 'Alice', gender: 'f' },
  { id: 2, name: 'Bob', gender: 'm' },
  { id: 3, name: 'Tom', gender: 'm' },
  { id: 4, name: 'Mary', gender: 'f' },
  ];



const Male =  props => {
  return(
    <ul>
      {users.filter(u => u.gender === 'f')
      .map(u => <li key = {u.id}>{u.name}</li>)}
    </ul>
  );
}

const Female =  props => {
  return(
    <ul>
      {users.filter(u => u.gender === 'm')
      .map(u => <li key = {u.id}>{u.name}</li>)}
    </ul>
  );
}

const App = props => {
  return(
    <Router>
      <div>




        <ul>
          <li><Link to ="/Male">Male</Link></li>
          <li><Link to ="/Female">female</Link></li>
        </ul>
        <div style={{background: 'cyan', padding: 20}}>
          <Routes>
            <Route path="/Male" element= {<Male />} />
            <Route path="/Female" element= {<Female />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/


import React, { useState, createRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
} from "react-router-dom";


const Add = props => {

  const num1Ref = createRef();
  const num2Ref= createRef();


  const add = () => {
    let num1 = Number( num1Ref.current.value);
    let num2 = Number( num2Ref.current.value);
    setResult(num1 + num2);
  }

  let [result, setResult] = useState(0);
  return(
    <div>
      <h1>Adding { result}</h1>
      <input  type='text' ref={num1Ref} /><br />
      <input  type='text' ref={num2Ref} /><br />
      <button onClick={add} >Add</button>
    </div>
  );
}


const Subtract = props => <h1>Subtracting</h1> 

const Multiply = props => <h1>Multipling</h1> 

const Division = props => <h1>Divising</h1> 

const Header = props => {
  return( <Add />);
}

const App = props =>{
  
  return(
    
    <div>
      
      <div style={{background: 'cyan',padding: 20}}>
      
        <h1>Mathematics</h1>
      </div>
      <Router>
        <ul>
          <li><Link to = "/Add">Add</Link></li>
          <li><Link to = "/Subtract">Subtract</Link></li>
          <li><Link to = "/Multiply">Multiply</Link></li>
          <li><Link to = "/Division">Division</Link></li>
        </ul>
        <Routes>
          <Route path="/Add" element={<Add />}></Route>
          <Route path="/Subtract" element={<Subtract />} />
          <Route path="/Multiply" element={<Multiply />} />
          <Route path="/Division" element={<Division />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App;