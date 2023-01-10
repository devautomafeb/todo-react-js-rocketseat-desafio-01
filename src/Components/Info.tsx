import styles from './Info.module.css'

interface InfoProps {
    totalChecks: () => number;
    totalTasks: () => number;
}

export default function Info(props: InfoProps) {
    return (
        <div className={styles.info}>
            <div className={styles.created}>
                <p>Tarefas Criadas</p>
                <div className={styles.counter}>
                    <p> {props.totalTasks()} </p>
                </div>
            </div>
            <div className={styles.done}>
                <p>Concluídas</p>
                <div className={styles.counter}>
                    <p> {props.totalChecks()} de {props.totalTasks()}</p>
                </div>
            </div>
        </div>
    )
}