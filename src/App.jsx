import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/todolist";

const state = {
  loading: "loading",
  error: "error",
  success: "success",
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [promiseState, setPromiseState] = useState(state.loading);

  const fetchTodo = () => {
    setPromiseState(state.loading);
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GET 요청 실패");
        }
        return response.json();
      })
      .then((data) => {
        setTodoList(data);
        setPromiseState(state.success);
      })
      .catch((error) => {
        setPromiseState(state.error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  if (promiseState == "loading") {
    return <div>로딩중..</div>;
  }
  if (promiseState == "error") {
    return <div>에러가 발생했습니다</div>;
  }
  if (promiseState == "success") {
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
}

export default App;
