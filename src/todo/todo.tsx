import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/page-header";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

const URL = "http://localhost:3003/api/todos";
export default class Todo extends Component<
  {},
  { description: string; list: any }
> {
  constructor(props: any) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { description: "", list: [] };
    this.refresh();
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => this.refresh());
  }

  handleChange(e: any) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleRemove(todo: any) {
    axios.delete(`${URL}/${todo._id}`).then(() => this.refresh());
  }

  refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((resp) => this.setState({ ...this.state, list: resp.data }));
  }

  render() {
    return (
      <div className="container">
        <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
        />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
