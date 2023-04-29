import React from 'react';
import { task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';
import TaskComponent from '../components/pure/task';


const TaskListComponet = () => {

    const defaultTask = new task('Example','Default Description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        ('TODO: cambiar el estado de una tarea ')
    }

    return (
        <div>
            <div>
                <h1> Your Task: </h1>
            </div>
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};

export default TaskListComponet;
