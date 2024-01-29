import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        나<sub>만의</sub> 작<sub>은</sub> 스<sub>케줄러</sub>
      </header>
      <main className={styles.main}>
        <TodoForm setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </main>
    </div>
  );
}

export default App;
