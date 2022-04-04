import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncomplteTodos } from "./components/IncomplteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState(["aaa", "iii"]);
  const [complateTodos, setComplateTodos] = useState(["uuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };
  const onClickComplate = (index) => {
    const newIncomplteTodos = [...incomplateTodos];
    newIncomplteTodos.splice(index, 1);

    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplteTodos);
    setComplateTodos(newComplateTodos);
  };
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };
  const onClickBack = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    const newIncomplteTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newIncomplteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです。</p>
      )}
      <IncomplteTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
