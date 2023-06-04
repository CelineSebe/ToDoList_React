import { useState } from "react";

function TaskCreation(props){
    const [taskName, setTaskName]= useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onTaskCreate(taskName);
        setTaskName('');
    }

    return(

            <form onSubmit={handleFormSubmit}>
                <button type="submit"> + </button>
                <input type="text" 
                    value={taskName}
                    onChange={handleInputChange}
                    className='taskcreation' 
                    placeholder="Nouvelle tâche"/>
            </form>
        )
}

export default TaskCreation;