import React from "react";
import Task from './Task';

class TaskList extends React.Component {
  render() {
    return (
        <div>
            <Task taskDescription="Buy some milk" />
            <Task taskDescription="Pick-up dog food" />
            <Task taskDescription="Buy some flowers" />
        </div>
    );
  }
}

export default TaskList;