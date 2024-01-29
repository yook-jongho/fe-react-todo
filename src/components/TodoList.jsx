import styles from "./todoList.module.scss";

export function TodoList({ todoList }) {
  return (
    <ul className={styles.todoList}>
      {todoList.map((todoItem, idx) => (
        <TodoItem key={idx} todoText={todoItem} />
      ))}
    </ul>
  );
}

function TodoItem({ todoText }) {
  return (
    <li className={styles.todoItem}>
      <p className={styles.todoContent}>{todoText}</p>
      <button className={styles.deleteTodo}>삭제</button>
    </li>
  );
}
