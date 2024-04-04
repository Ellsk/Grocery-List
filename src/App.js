import './App.css';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react';
import AddItem from './AddItem';
import Search from './Search';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem
    ("shoppinglist")));

  const [newItem, setNewItems] = useState('');

  const [search, setSearch] = useState('');
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }
  
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem  = { id, checked:false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    // console.log(id);
     const listItems = items.filter((item) => item.id !== id)
     setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    // console.log(`form submitted Item: ${newItem}`);
    addItem(newItem);
    setNewItems("");
  }
  return (
    <div className="App">
       <Header title ="Grocery List"/>
       <AddItem 
          newItem={newItem}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}
       />
       <Search 
        search={search}
        setSearch={setSearch}
       />
       <Content 
          items={items.filter((item)=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
       /> 
       <Footer length={items.length}/>
    </div>
  );
}

export default App;

// Provide a search bar form or component for searching Grocery item