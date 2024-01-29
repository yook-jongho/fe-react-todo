import { useState } from "react";
import styles from "./todoList.module.scss";

export function TodoList({ todoList, setTodoList }) {
  return (
    <ul className={styles.todoList}>
      {todoList.map((todoItem, idx) => (
        <TodoItem key={idx} idx={idx} todoItem={todoItem} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function TodoItem({ todoItem: { text, complete }, setTodoList, idx }) {
  const [isComplete, setIsComplete] = useState(complete);

  const deleteTodo = () => {
    setTodoList((prev) => prev.filter((_, index) => index !== idx));
  };

  const completeTodo = () => {
    setIsComplete((prev) => !prev);
  };

  return (
    <li className={styles.todoItem}>
      <p
        className={`${styles.todoContent} ${isComplete ? styles.complete : ""}`}
        onClick={completeTodo}
      >
        {text}
      </p>
      <button className={styles.deleteTodo} onClick={deleteTodo}>
        삭제
      </button>
    </li>
  );
}
