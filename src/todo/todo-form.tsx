import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/icon-button";

const TodoForm = (props: any) => {
  return (
    <div className="form row" role="form">
      <Grid cols="12 9 10">
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton hide={false} icon="plus" styleButton="primary" />
      </Grid>
    </div>
  );
};

export default TodoForm;
