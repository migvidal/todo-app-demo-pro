import { useEffect, useState } from "react"
import { Todo, sampleTodos } from "./Todo"
import { TodoItem } from "./TodoItem"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from "./CustomButton";
import { ComposeWindow } from "./ComposeWindow";

const storedTodosKey = "storedTodos"
const storedDoneTodosKey = "storedDoneTodos"

const App = () => {
  // Initial load
  useEffect(() => {
    console.log("initial load");
    // Load sample todos
    const sampleTodosAsJson = JSON.stringify(Array.from(sampleTodos));
    if (localStorage.getItem(storedTodosKey) == null) {
      localStorage.setItem(storedTodosKey, sampleTodosAsJson);
    }

    // Load todos
    const storedTodos = localStorage.getItem(storedTodosKey) as string
    setTodos(new Set(JSON.parse(storedTodos) as Todo[]))


    // Load done todos
    if (localStorage.getItem(storedDoneTodosKey) != null) {
      const storedDoneTodos = localStorage.getItem(storedDoneTodosKey) as string
      setDoneTodos(new Set(JSON.parse(storedDoneTodos) as Todo[]))
    }
  }, []);
  let [todos, setTodos] = useState(new Set<Todo>());
  useEffect(() => {
    // Save todos to local storage
    //console.log("Save todos to local storage");
    const todosAsJson = JSON.stringify(Array.from(todos));
    localStorage.setItem(storedTodosKey, todosAsJson);
  }, [todos]);

  function submitTodo(newTodo: Todo) {
    const alreadyExists = Array.from(todos).some(todo => todo.title == newTodo.title);
    if (alreadyExists) { return }
    const newSet = new Set(todos);
    newSet.add(newTodo);
    setTodos(newSet);
    setDialogVisible(false);
  }
  function deleteTodo(todo: Todo) {
    const newSet = new Set(todos);
    newSet.delete(todo);
    setTodos(newSet);
  }

  let [doneTodos, setDoneTodos] = useState(new Set<Todo>());
  useEffect(() => {
    // Save doneTodos to local storage
    console.log("Save doneTodos to local storage");
    const doneTodosAsJson = JSON.stringify(Array.from(doneTodos))
    localStorage.setItem(storedDoneTodosKey, doneTodosAsJson);
  }, [doneTodos]);
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

  const composeDialog = document.getElementById("compose-dialog") as HTMLDialogElement | undefined;
  if (composeDialog) {
    if (dialogVisible) {
      composeDialog.showModal();
    } else {
      composeDialog.close();
    }
  }


  return (
    <main className="mx-auto max-w-xl">
      <div className="m-2">
        <h1 className="text-2xl font-bold">Todo App</h1>

        <div className="flex flex-row justify-between">
          {todos.size != 0 ?
            <CustomButton
              style=""
              label={editMode ? "Cancel" : "Edit"}
              icon={undefined}
              onClick={() => setEditMode(!editMode)} />
            : ""
          }
          <CustomButton
            style=""
            label={"Add"}
            icon={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => setDialogVisible(true)} />
        </div>

        {todos.size == 0 ?
          <div className="flex justify-center text-slate-400">
            No tasks left!
          </div>
          :

          Array.from(todos).map(todo =>
            <TodoItem
              key={todo.title}
              todo={todo}
              onClick={() => updateDoneTodos(todo)}
              isChecked={doneTodos.has(todo)}>
              {editMode ? <button><FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo)} /></button> : ""}
            </TodoItem>
          )}
        <dialog id="compose-dialog" className="absolute left-0 right-0 top-0 bottom-0  backdrop-blur p-4 rounded-2xl bg-slate-200/70 dark:bg-slate-900/95">
          <div>
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
          </div>

        </dialog>
      </div>
    </main>
  )
}

export default App