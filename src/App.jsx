import { useState } from "react"
import { todos } from "./Todo"
import { TodoItem } from "./TodoItem"

const App = () => {
  let [doneTodos, setDoneTodos] = useState(new Set());

  function onItemClicked(todo) {
    let newDoneTodos = doneTodos
    if (doneTodos.has(todo)) {
      newDoneTodos.delete(todo);
    } else {
      newDoneTodos.add(todo);
    }
    setDoneTodos(newDoneTodos);
  }
  return (
    <main className="m-2 max-w-xl">
      <h1 className="text-2xl font-bold">Todo app</h1>
      <p>{doneTodos.forEach(dt => <strong>{dt.title}</strong>)}</p>
      {todos.map(todo =>
        <TodoItem
          key={todo.title}
          title={todo.title}
          description={todo.description}
          isImportant={todo.isImportant}
          onClick={() => onItemClicked(todo)}
          isChecked={doneTodos.has(todo)} />
      )}
    </main>
  )
}

export default App