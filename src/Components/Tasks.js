import React, { useState } from 'react'
//import "./App.css"
import Input from './Input'
import List from './List';
function Task() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList}/>
        <h1 className="app-heading">Task</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <List key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default Task;