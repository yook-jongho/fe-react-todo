import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useEffect, useReducer, useState } from "react";

const BASE_URL = "http://localhost:3000/todolist";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const actionType = {
  loading: "LOADING",
  error: "ERROR",
  success: "SUCCESS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null, data: null };
    case "ERROR":
      return { loading: false, error: action.error, data: null };
    case "SUCCESS":
      return { loading: false, error: null, data: action.data };
    default:
      throw new Error(`해당하는 action type이 없습니다. ${action.type}`);
  }
};

function App() {
  const [promiseState, dispatch] = useReducer(reducer, initialState);

  const fetchTodo = () => {
    dispatch({ type: actionType.loading });
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GET 요청 실패");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: actionType.success, data });
      })
      .catch((error) => {
        dispatch({ type: actionType.error, error });
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const { loading, error, data: todoList } = promiseState;

  if (loading) {
    return <div>로딩중..</div>;
  }
  if (error || !todoList) {
    return <div>에러가 발생했습니다</div>;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        나<sub>만의</sub> 작<sub>은</sub> 스<sub>케줄러</sub>
      </header>
      <main className={styles.main}>
        <TodoForm />
        <TodoList todoList={todoList} />
      </main>
    </div>
  );
}

export default App;
