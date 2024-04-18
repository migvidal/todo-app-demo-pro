import { useState } from "react"
import { Todo, dummyTodos } from "./Todo"
import { TodoItem } from "./TodoItem"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from "./CustomButton";
import { ComposeWindow } from "./ComposeWindow";

const App = () => {
  let [todos, setTodos] = useState(dummyTodos);
  function submitTodo(todo: Todo) {
    const newSet = new Set(todos);
    newSet.add(todo);
    setTodos(newSet);
    setDialogVisible(false);
  }

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
  let [dialogVisible, setDialogVisible] = useState(false);
  let [editMode, setEditMode] = useState(false);

  return (
    <main className="m-2 max-w-xl">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <div className="flex flex-row">
        <CustomButton
          style=""
          label={"Edit"}
          icon={<FontAwesomeIcon icon={faEdit} />}
          onClick={() => setEditMode(!editMode)} />
        <CustomButton
          style=""
          label={"Add"}
          icon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => setDialogVisible(true)} />
      </div>
      {Array.from(todos).map(todo =>
        <TodoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          isImportant={todo.isImportant}
          onClick={() => updateDoneTodos(todo)}
          isChecked={doneTodos.has(todo)} />
      )}
      <dialog open={dialogVisible} className="absolute top-0 left-0 p-10 m-2 rounded-2xl bg-slate-200/90 dark:bg-slate-900/95">
        <div className="flex flex-row-reverse">
          <CustomButton
            style=""
            label={"Close"}
            icon={<FontAwesomeIcon icon={faXmark} />}
            onClick={() => setDialogVisible(false)}
          />
        </div>
        <ComposeWindow
          onSubmit={newTodo => submitTodo(newTodo)}
        />

      </dialog>
    </main>
  )
}

export default App