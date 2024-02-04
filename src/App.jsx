import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import styles from "./app.module.scss";
import { useAsync } from "./hooks/useAsync";
import { getTodo } from "./service/service";

function App() {
    const [promiseState, refetchTodo] = useAsync(getTodo, []);

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
                <TodoForm todoList={refetchTodo} />
                <TodoList todoList={todoList} />
            </main>
        </div>
    );
}

export default App;
