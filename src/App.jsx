import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>My Todo App</header>
      <main className={styles.main}>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
