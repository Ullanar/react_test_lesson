import React, {memo, useCallback, useEffect, useState} from "react";
import classes from './mainPage.module.css'
import {TASK_TEST_LIST} from "../constants";

const MainPage = (props) => {

    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(TASK_TEST_LIST)

    useEffect(() => {
    }, [tasks])

    const handleChangeControlled = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleClickControlled = useCallback(() => {
        const currentTasks = tasks
        currentTasks.push({
            id: currentTasks.length + 1,
            title: value,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            deadline: new Date(),
        })
        setTasks(currentTasks)
        console.log(tasks)
    }, [tasks, setTasks, value])

    return (
        <div className={classes.mainPageWrapper}>

            <div>
                <input placeholder="Controlled" value={value} onChange={handleChangeControlled}/>
                <button onClick={handleClickControlled}>Create Task</button>
            </div>

            {tasks.map(task => (
                <div className={classes.taskCard} key={task.id}>
                    <div>{task.title}</div>
                    <div>{task.description}</div>
                    <div>20.03.2022 17:00</div>
                </div>
                )
            )}

        </div>
    )
}

export default memo(MainPage)