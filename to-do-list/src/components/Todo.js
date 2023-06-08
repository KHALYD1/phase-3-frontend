

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ''} ${task.isNew ? 'new-task' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div className='icn_cntnr'>
        <div className='edit'>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          style={{ color: 'white' }} 
        />
        </div>
        <div className='delete'>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          style={{ color: 'white' }}
        />
        </div>
      </div>
    </div>
  );
};
