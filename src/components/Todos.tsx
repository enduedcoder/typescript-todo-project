import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodoList item={item} />;
        //  <li key={item.id}> {item.text}</li>;
      })}
    </ul>
  );
};

export default Todos;
