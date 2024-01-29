const BASE_URL = "http://localhost:3000/todolist";

export const getTodoList = () => {
  try {
    const getData = fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) throw new Error("GET 요청 실패");
        return response.json();
      })
      .then((data) => {
        return data;
      });
    return getData;
  } catch (e) {
    console.error(e);
  }
};
