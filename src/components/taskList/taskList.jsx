import React from "react";
import TaskItem from "./taskListItem/taskListItem.jsx";

export default props => {
  const complitedCount = props.tasks.reduce((total, element) => {
    if (element.complite) {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className="d-flex flex-column">
      <p className="text-center mt-auto mb-1 text-secondary">
        Complited {complitedCount} from {props.tasks.length}
      </p>

      {props.tasks.map(tasksItem => {
        return (
          <TaskItem
            status={tasksItem.complite}
            key={tasksItem.id}
            name={tasksItem.name}
            forDone={() => props.forDone(tasksItem.id)}
            forDelete={() => props.forDelete(tasksItem.id)}
          />
        );
      })}
    </div>
  );
};
