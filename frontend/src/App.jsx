import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', completed: false });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch tasks
  useEffect(() => {
    axios.get('http://localhost:3000/api/tasks')
      .then((res) => {
        setTasks(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error('Error fetching tasks:', err);
        setTasks([]);
      });
  }, []);
  

  // Add or Update Task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`http://localhost:3000/api/tasks/${task._id}`, task)
        .then(() => setIsEditing(false))
        .finally(() => fetchTasks());
    } else {
      axios.post('http://localhost:3000/api/tasks', task)
        .finally(() => fetchTasks());
    }
    setTask({ title: '', completed: false });
  };

  // Delete Task
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/tasks/${id}`).finally(() => fetchTasks());
  };

  // Fetch tasks again
  const fetchTasks = () => {
    axios.get('http://localhost:3000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task title"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </form>
  
      {/* Check if tasks exist */}
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available. Add a task to get started!</p>
      ) : (
        <ul className="bg-white p-4 shadow">
          {tasks.map((task) => (
            <li key={task._id} className="flex justify-between items-center mb-2">
              <span>{task.title}</span>
              <div>
                <button
                  onClick={() => { setTask(task); setIsEditing(true); }}
                  className="bg-yellow-500 text-white p-2 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 text-white p-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default App;
