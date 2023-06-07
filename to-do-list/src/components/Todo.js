// import React from 'react'

// const Todo = () => {
//   return (
//     <div className='Todo'>
//       <p>Go to school</p>
//     </div>
//   )
// }

// export default Todo

import React from "react";
import { IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ task, editTodo, deleteTodo }) => {
  return (
    <>
      {/* Edit Icon */}
      <IconButton
        icon={<EditIcon />}
        onClick={() => editTodo(task.id)}
        variant="ghost"
        size="sm"
        aria-label="Edit"
      />

      {/* Delete Icon */}
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => deleteTodo(task.id)}
        variant="ghost"
        size="sm"
        aria-label="Delete"
      />
    </>
  );
};

export default TodoItem;
