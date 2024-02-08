import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todosContext: [
    {
      id: 1,
      completed: false,
      todo: "Todo",
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
