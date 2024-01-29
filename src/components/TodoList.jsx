import styles from "./todoList.module.scss";

export function TodoList() {
  return (
    <ul className={styles.todoList}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

function TodoItem() {
  return (
    <li className={styles.todoItem}>
      <p className={styles.todoContent}>오늘도 개발자가 안된다고 말했다.</p>
      <button className={styles.deleteTodo}>삭제</button>
    </li>
  );
}
