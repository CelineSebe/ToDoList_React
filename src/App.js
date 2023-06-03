import TaskCreation from './TaskCreation';
import Task from './Task';
import './App.css';
import { faTrash } from '@fortawesome/free-regular-svg-icons';

function App() {
  return (
    <div>
    <div class='todoapp'>
      <TaskCreation />
      <Task />
      
    </div>
    </div>
  );
}

export default App;
