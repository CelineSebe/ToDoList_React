import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Taskdescription(props) {

    const { id } = useParams();
    const [taskDescription, setTaskDescription]= useState('');

    const handleInputChange = (event) => {
        setTaskDescription(event.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onTaskCreate(taskDescription);
        setTaskDescription('');
    }
  return (
    <div >
        <h2> Description</h2>
        <form onSubmit={handleFormSubmit} style={{height:"100px"}}>
                <input type="text" style={{height:"100%"}}
                    value={taskDescription}
                    onChange={handleInputChange}
                    className='taskdescription' 
                    placeholder="détail"/>
            </form>
    </div>);
}