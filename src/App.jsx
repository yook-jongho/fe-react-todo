import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useEffect, useReducer, useState } from "react";

const BASE_URL = "http://localhost:3000/todolist";

const initialState = {
  loading: false,
  error: false,
  success: false,
};

const action = {
  loading: "LOADING",
  error: "ERROR",
  success: "SUCCESS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: false, success: false };
    case "ERROR":
      return { loading: false, error: true, success: false };
    case "SUCCESS":
      return { loading: false, error: false, success: true };
    default:
      throw new Error(`해당하는 action type이 없습니다. ${action.type}`);
  }
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [promiseState, dispatch] = useReducer(reducer, initialState);
  const { loading, error, success } = promiseState;

  const fetchTodo = () => {
    dispatch({ type: action.loading });
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GET 요청 실패");
        }
        return response.json();
      })
      .then((data) => {
        setTodoList(data);
        dispatch({ type: action.success });
      })
      .catch((error) => {
        dispatch({ type: action.error });
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) {
    return <div>로딩중..</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다</div>;
  }
  if (success) {
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
