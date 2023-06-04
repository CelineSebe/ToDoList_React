

import { useState } from "react";
import { useEffect } from "react";

export default function Task(props){

    const [taskText, setTaskText] = useState(props.name);
    const [checked, setChecked] = useState(false);

    const handleInputChange = (event) => {
      setTaskText(event.target.value);
    };

    const handleCheckcircleChange = () => {
        setChecked(!checked);
      };
    
      const handleDeleteTask = () => {
        // Supprimer la tâche du localStorage
        localStorage.removeItem(`task_${props.id}`);
      };
      useEffect(() => {
        // Sauvegarde des données dans le localStorage lorsqu'il y a des changements
        localStorage.setItem(`task_${props.id}`, JSON.stringify({ text: taskText, checked}));
      }, [taskText, checked, props.id]);

    return(
    <div class="task">
        <div onClick={handleCheckcircleChange}>
        {checked ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path id="circle-color-checked"d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            ):(
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path id="circle-color" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            )}
        </div>
        <input type='text' className='tasktext'placeholder="tâche" value={taskText}
        onChange={handleInputChange}/>
        <div className="trash" onClick={handleDeleteTask}>
            <svg xmlns="http://www.w3.org/2000/svg"  height="1em" viewBox="0 0 448 512"><path id="trash-color" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>
    </div>
    )    
}