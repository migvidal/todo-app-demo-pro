import { useState } from "react"
import { Todo, todos } from "./Todo"
import { TodoItem } from "./TodoItem"
import React from "react";
import { todo } from "node:test";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from "./CustomButton";

const App = () => {
  let [doneTodos, setDoneTodos] = useState(new Set<Todo>());
  function updateDoneTodos(newTodo: Todo) {
    const newSet = new Set(doneTodos);
    if (newSet.has(newTodo)) {
      newSet.delete(newTodo);
    } else {
      newSet.add(newTodo);
    }
    setDoneTodos(newSet);
  }
  let [editMode, setEditMode] = useState(false);

  return (
    <main className="m-2 max-w-xl">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <CustomButton label={"Edit"} icon={<FontAwesomeIcon icon={faEdit} />} onClick={ () => setEditMode(!editMode)} />
      {Array.from(todos).map(todo =>
        <TodoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          isImportant={todo.isImportant}
          onClick={() => updateDoneTodos(todo)}
          isChecked={doneTodos.has(todo)} />
      )}
    </main>
  )
}

export default App