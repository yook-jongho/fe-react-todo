import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useEffect, useState } from "react";
import { getTodoList } from "./service/service";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setTodoList(null);
        setError(null);
        setLoading(true);
        const response = await getTodoList();
        setTodoList(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchTodo();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!todoList) return null;

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
