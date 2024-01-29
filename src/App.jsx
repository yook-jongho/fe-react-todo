import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>My Todo App</header>
      <main className={styles.main}>
        <TodoForm setTodoList={setTodoList} />
        <TodoList todoList={todoList} />
      </main>
    </div>
  );
}

export default App;
