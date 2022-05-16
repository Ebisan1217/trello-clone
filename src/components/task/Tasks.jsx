import React from "react";

import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <div>
      <div>
        {taskList.map((task) => {
          return (
            <div key={task.id}>
              <Task task={task} setTaskList={setTaskList} taskList={taskList} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
