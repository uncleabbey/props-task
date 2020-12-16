import React from 'react'
const list = [
  {
    id: 1,
    task: "Wash Cloth",
    isComplete: true
  },
  {
    id: 2,
    task: "Take out the trash",
    isComplete: true
  },
  {
    id: 3,
    task: "Shopping",
    isComplete: false
  },
  {
    id: 4,
    task: "Listen to Music",
    isComplete: true
  },
  {
    id: 5,
    task: "Call HR",
    isComplete: false
  },
];

const Todo = ({task, isComplete}) => {
  return (
    <div className="todo">
      <input type="checkbox" name="isComplete" checked={isComplete} />
      <span className={isComplete ? "isComplete": ""}>{task}</span>
    </div>
  )
}

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      {
        list.map(({id, task, isComplete}) => <Todo key={id} task={task} isComplete={isComplete} />)
      }
    </div>
  )
}
export default TodoList;
