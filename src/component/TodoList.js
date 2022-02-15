import React from 'react';
import"../style/TodoList.css"
////////////////////import component
import Todo from "./Todo"

const TodoList = (status) => {

  let users = JSON.parse( localStorage.getItem('user') || "[]" );

  return (
    <div className='Todolist'>
      {users.map((users)=>(<Todo key={Math.random()} user={users } status={status}/>))}
    </div>
  );


};

export default TodoList;;