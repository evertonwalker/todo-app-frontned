import React from "react";
import PageHeader from "../template/page-header";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

const Todo = (props: any) => {
  return (
    <div className="container">
      <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
