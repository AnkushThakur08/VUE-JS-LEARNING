import axios from "axios";

export interface IPayload {
  title: string;
  description: string;
}

export const addTodo = async (payload: IPayload) => {
  await axios.post("https://api.freeapi.app/api/v1/todos/", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTodo = () => {
  axios.get("https://api.freeapi.app/api/v1/todos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteTodo = (id: string) => {
    axios.delete(`https://api.freeapi.app/api/v1/todos/${id}`)
}

export const updateStatus = (id: string) => {
    axios.patch(`https://api.freeapi.app/api/v1/todos/toggle/status/${id}`)

}