import TaskCreation from './TaskCreation';
import Task from './Task';
import Taskdescription from './Taskdescription';
import './App.css';
import { useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Récupération des données du localStorage lors du chargement de l'application
    const savedTasks = Object.keys(localStorage)
      .filter((key) => key.startsWith('task_'))
      .map((key) => {
        const taskId = key.substring(5);
        const taskData = JSON.parse(localStorage.getItem(key));
        return { id: taskId, name: taskData.text, checked: taskData.checked };
      });
    setTasks(savedTasks);
  }, []);

  const handleTaskCreate = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName, 
      checked: false,
    };
    setTasks([...tasks, newTask]);
  }

  const handleTaskUpdate = (taskId, newTaskName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newTaskName };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <div className='todoapp'>
        <TaskCreation onTaskCreate={handleTaskCreate}/>
        {tasks.map(task => (
        <Task key={task.id}
              id={task.id}
              name={task.name}
              checked={task.checked} 
              onUpdate={(newTaskName) => handleTaskUpdate(task.id, newTaskName)}
              />
        )).reverse()}
        <Routes>
          <Route path="/task/:id" element={<Taskdescription />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
