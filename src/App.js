import React, { Component } from "react";
import nanoid from "nanoid";
import "./App.css";
import NewTask from "./components/newTask/newTask.jsx";
import TaskList from "./components/taskList/taskList.jsx";

class App extends Component {
  state = {
    tasklist: [
      {
        name: "To wash the dished",
        id: "BLZMqDg34GIUWYqhjlM7v",
        complite: false
      },
      { name: "Take a walk", id: "uyu5i-zqbgrHj2u0ezwq9", complite: false },
      { name: "Buy new phone", id: "BLZMqDg34GIUWYq-hello" ,complite : false}
    ],
    newtask: ""
  };

  addTaskDesc = e => {
    let newtask = e.target.value;
    this.setState({ newtask });
  };

  addTaskInTaskList = () => {
    if (this.state.newtask) {
      const tasklist = [...this.state.tasklist];
      const newTask = {
        name: this.state.newtask,
        id: nanoid(),
        complite: false
      };
      tasklist.push(newTask);
      this.setState({ tasklist, newtask: "" });
    }
  };

  deleteTask = key => {
    const tasklist = [...this.state.tasklist];
    const index = tasklist.findIndex(i => i.id === key);
    tasklist.splice(index, 1);
    this.setState({ tasklist });
  };

  doneTask = key => {
    const tasklist = [...this.state.tasklist];
    const index = tasklist.findIndex(i => i.id === key);
    tasklist[index].complite = !this.state.tasklist[index].complite;
    this.setState({ tasklist });
  };

  render() {
    return (
      <div className="task-list__wrap">
        <h2 className="my-2 text-center">Task list</h2>
        <div className="task-list border border-secondary rounded p-2 mb-2">
          <NewTask
            forInput={e => this.addTaskDesc(e)}
            forButton={this.addTaskInTaskList}
          />
          <hr className="my-2" />
          {this.state.tasklist.map(task => (
            <TaskList
              name={task.name}
              key={task.id}
              status={task.complite}
              forDelete={() => this.deleteTask(task.id)}
              forDone={() => this.doneTask(task.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
