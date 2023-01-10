import styles from './NewTask.module.css'


import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from 'react';

import Info from './Info';


import Tasks from './Tasks';

interface NewTaskProps {
    text: string;
    status: boolean;
}

export default function NewTask() {

    const [newTasks, setNewTasks] = useState<NewTaskProps[]>([])
    const [newTaskChange, setNewTaskChange] = useState('')
    const [totalChecks, setTotalChecks] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);

    useEffect(() => {
        setNewTaskChange('');
    }, [newTasks])

    function handleAddNewtask() {
        const newTaskToAdd = { text: newTaskChange, status: false };
        //console.log(newTaskToAdd);
        setNewTasks([...newTasks, newTaskToAdd]);
        //console.log("On the handle: " + JSON.stringify(newTasks))
        setNewTaskChange('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskChange(event?.target.value)
        event.preventDefault();
    }

    function deteleTask(taskToDelete: string) {

        const TaskBeforeDelete = newTasks.filter(tasks => {
            return tasks.text !== taskToDelete
        })
        setNewTasks(TaskBeforeDelete);
    }

    function handleCheckTask(taskToBeCheck: string) {

        const taskCheck = newTasks;
        const elementIndex = taskCheck.findIndex(obj => obj.text == taskToBeCheck)
        taskCheck[elementIndex].status = !taskCheck[elementIndex].status;
        setNewTasks(taskCheck)
    }

    function totalChecksValidation() {
        const totalCheckTasks = newTasks.filter(tasks =>{
            return tasks.status!== false;
        })
        setTotalChecks(totalCheckTasks.length);
        return totalChecks
    }

    function totalTasksValidation() {
        setTotalTasks(newTasks.length);
        return totalTasks
    }

    return (
        <div>
            <div className={styles.newItem}>
                <input
                    type="text"
                    value={newTaskChange}
                    onChange={handleNewTaskChange} />
                <button onClick={handleAddNewtask}>
                    Criar
                    <PlusCircle size={32} />
                </button>
            </div>
            <div className={styles.tasks}>
                <Info totalChecks={totalChecksValidation} totalTasks={totalTasksValidation} />
                <div className={styles.list}>
                    {
                        newTasks.map(task => {
                            return (<Tasks key={task.text} text={task.text} onCheckTask={handleCheckTask} onDeleteTask={deteleTask} status={task.status} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}