import { useState } from "react";
import styles from "./todoForm.module.scss";
import { useAsync } from "../hooks/useAsync";
import { postTodo } from "../service/service";

export function TodoForm(refetchTodo) {
    const [todoText, setTodoText] = useState("");
    const [state, fetchTodo] = useAsync(
        () => postTodo({ text: todoText, complete: false }),
        [todoText],
        true
    );

    const handleInputChange = (event) => {
        const {
            target: { value },
        } = event;

        setTodoText(value);
    };

    const submitTodo = async (event) => {
        event.preventDefault();
        setTodoText("");
        if (!todoText.trim()) {
            return;
        }
        fetchTodo().then(refetchTodo.todoList);
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
