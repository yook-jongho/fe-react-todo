import { useState } from "react";
import styles from "./todoForm.module.scss";

export function TodoForm({ setTodoList }) {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (event) => {
    const {
      target: { value },
    } = event;

    setTodoText(value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    setTodoText("");
    if (!todoText.trim()) {
      return;
    }
    setTodoList((prev) => [...prev, todoText]);
  };

  return (
    <form onSubmit={submitTodo} className={styles.todoForm}>
      <input
        type="text"
        className={styles.todo}
        placeholder="할일을 입력하세요"
        onChange={handleInputChange}
        value={todoText}
      />
      <button type="submit" className={styles.submit}>
        등록
      </button>
    </form>
  );
}
