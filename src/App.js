import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Photoshop', price: "500$" },
    { name: 'Illustrator', price: "300$$" },
    { name: 'Reader', price: "50$$" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        {
          products.map(x => <li>{x.name}</li>)
        }
        <Person name="Shahin"></Person>
        {
          products.map(pd => <Products product = {pd}></Products>)
        }

      </header>
    </div>
  );
}
function Products(props) {
  const prdStyle = {
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "200px",
    width: "200px",
    float: "left"
  }
  return (
    <div style={prdStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(5);
  const increaseCount = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

function User(){
  const [user, setUser] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return(
    <div>
      <h2>Dynamic Users: {user.length}</h2>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
        
      </ul>
    </div>
  )
}

function Person(props) {
  const pStyle = {
    color: "green",
    border: "4px solid yellow"
  }
  return (
    <div style={pStyle} >
      <h2>This is {props.name}</h2>
      <h3>I am an Web freak</h3>
    </div >

  )
}

export default App;
