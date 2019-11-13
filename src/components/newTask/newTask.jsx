import React from "react";
import "./newTask";

export default props => (
  <div className="new-task__wrap">
    <div className="form-inline">
      <input
        type="text"
        className="form-control flex-grow-1 mr-1"
        placeholder="Input new task"
        id="inputDefault"
        onChange={props.forInput}
      />
      <button className="btn btn-info" onClick={props.forButton}><i className="fas fa-share"></i></button>
    </div>
  </div>
);
