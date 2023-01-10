
import styles from './Tasks.module.css';

import { Circle, CheckCircle, Trash } from "phosphor-react";
import { useState } from 'react';

interface TaskProps {
    text: string;
    status: boolean;
    onDeleteTask: (task: string) => void;
    onCheckTask: (task: string) => void;
}

export default function Tasks(props: TaskProps) {

    const [val, setVal] = useState(0)

    function handleDeleteTask() {
        return props.onDeleteTask(props.text);
    }
    function handleCheckTask() {
        return props.onCheckTask(props.text);
    }

    function IconCheck(statusCheck: boolean) {
        if (statusCheck) {
            return (<Circle size={24} color={'var(--Blue)'} />)
        }
        else {
            return (<CheckCircle size={24} color={'var(--PurpleDark)'} />)
        }
    }

    return (
        <div className={styles.task}>

            <button
                id={styles.check}
                onClick={handleCheckTask}>{
                    IconCheck(!props.status)
                }
            </button>
            <p id={(!props.status) ? (styles.text) : (styles.textCheck)}>{props.text}</p>
            <button id={styles.delete} onClick={handleDeleteTask}><Trash size={24} color={'var(--Gray-300)'} /></button>
        </div>

    )
}