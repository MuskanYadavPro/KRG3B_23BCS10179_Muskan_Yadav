import React, { useState } from "react";
import useForm from "./useForm";


function TaskManager() {

    const [task, setTask] = useState([]);

    const{form , changes , reset} = useState([])
    return (
    <div>

      <h2>Task Manager</h2>
    

     <button type="submit">Add Task</button>

    </div>
  );
}

export default TaskManager;