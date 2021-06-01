import React from "react";
import IconButton from "../template/icon-button";

const TodoList = (props: any) => {
  function renderRows() {
    const list = props.list || [];
    return list.map((todo: any) => {
      return (
        <tr key={todo._id}>
          <td>{todo.description}</td>
          <td>
            <IconButton
              hide={false}
              styleButton="danger"
              icon="trash"
              onClick={() => props.handleRemove(todo)}
            />
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default TodoList;
