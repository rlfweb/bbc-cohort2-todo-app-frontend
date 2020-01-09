import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.jobs.map(function(item) {
          return <Task taskDescription={item.description} />;
        })}
      </div>
    );
  }
}

export default TaskList;
