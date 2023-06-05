import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TaskCreationDescription(props) {

    const { id } = useParams();
    const [taskDescription, setTaskDescription]= useState(props.taskDescription);

    const handleInputChange = (event) => {
        setTaskDescription(event.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        saveTaskDescriptionToLocalStorage();
    }

    useEffect(() => {
        // Fetch the existing task data from localStorage
        const existingTaskData = JSON.parse(localStorage.getItem(`task_${id}`));
        if (existingTaskData) {
          // Merge the existing task data with the updated taskDescription
          setTaskDescription(existingTaskData.taskDescription || '');
        }
      }, [id]);
    
      const saveTaskDescriptionToLocalStorage = () => {
        // Fetch the existing task data from localStorage
        const existingTaskData = JSON.parse(localStorage.getItem(`task_${id}`));
        let updatedTaskData;
    
        if (existingTaskData) {
          // Merge the existing task data with the updated taskDescription
          updatedTaskData = {
            ...existingTaskData,
            description: taskDescription,
          };
        } else {
          // Create a new task data object with only the taskDescription
          updatedTaskData = {
            description: taskDescription,
          };
        }
    
    // Sauvegarde des données dans le localStorage lorsqu'il y a des changements
    localStorage.setItem(`task_${id}`, JSON.stringify(updatedTaskData));
      };

  return (
        <div >
            <h2> Description</h2>
            <p>Task ID: {id}</p>
            <form onSubmit={handleFormSubmit} style={{height:"100px"}}>
                    <button type="submit"> + </button>
                    <input type="text" style={{height:"100%"}}
                        value={taskDescription}
                        onChange={handleInputChange}
                        className='taskdescription' 
                        placeholder="Détail"/>
            </form>
        </div>
    );
}