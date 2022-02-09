import React from 'react';
import"../style/TodoList.css"
import { useState } from 'react';
////////////////////import component
import Todo from "./Todo"
const TodoList = () => {
  let users = JSON.parse( localStorage.getItem('user') || "[]" );


  return (
    <div className='Todolist'>
      {users.map((users)=>(<Todo key={Math.random()} user={users}/>))}
    </div>
  );


};

export default TodoList;;