import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null, data: null };
    case "ERROR":
      return { loading: false, error: action.error, data: null };
    case "SUCCESS":
      return { loading: false, error: null, data: action.data };
    default:
      throw new Error(`해당하는 action type이 없습니다. ${action.type}`);
  }
};

const actionType = {
  loading: "LOADING",
  error: "ERROR",
  success: "SUCCESS",
};

export const useAsync = (callback, deps = []) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: null,
    data: null,
  });

  const fetchData = async () => {
    dispatch({ type: actionType.loading });
    try {
      const response = await callback();

      if (!response.ok) {
        throw new Error("GET 요청 실패");
      }

      const data = await response.json();
      dispatch({ type: actionType.success, data });
    } catch (error) {
      dispatch({ type: actionType.error, error });
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
};
