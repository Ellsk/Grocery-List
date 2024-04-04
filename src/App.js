import './App.css';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound of Cocoa Covered Almonds"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ])

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, 
    checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    // console.log(id);
     const listItems = items.filter((item) => item.id !== id)
     setItems(listItems);
     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  return (
    <div className="App">
       <Header title ="Grocery List"/>
       <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
       />
       <Footer length={items.length}/>
    </div>
  );
}

export default App;
