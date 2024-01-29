import styles from "./todoForm.module.scss";

export function TodoForm() {
  return (
    <form action="" className={styles.todoForm}>
      <input type="text" className={styles.todo} placeholder="할일을 입력하세요" />
      <button className={styles.submit}>등록</button>
    </form>
  );
}
