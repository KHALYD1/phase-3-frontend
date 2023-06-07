// import React, { useState } from "react";
// import Todoform from './Todoform'

// const TodoWrapper = () => {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEditing: false },
//     ]);
//   }

//   }

//   return (
//     <div className='TodoWrapper'>
//       <Todoform addTodo={addTodo} />
//     </div>
//   )
// }

// export default TodoWrapper

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import the uuidv4 function from the uuid package
import Todoform from './Todoform';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos)

  };

  return (
    <div className='TodoWrapper'>
      <Todoform addTodo={addTodo} />
    </div>
  );
};

export default TodoWrapper;
