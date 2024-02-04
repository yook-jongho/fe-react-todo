const BASE_URL = "http://localhost:3000/todolist";

export const getTodo = async () => {
    const response = await fetch(BASE_URL);
    return response;
};

export const postTodo = async (data) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    console.log(response);
    return response;
};

export const deleteTodo = async (id) => {
    const response = await fetch(BASE_URL, {
        method: "DELETE",
        body: JSON.stringify(id),
    });
    return response;
};
