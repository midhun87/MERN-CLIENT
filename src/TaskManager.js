import React, { useState, useContext } from 'react';
import { MyContext } from './MyContext';

const TaskManager = () => {
  const { currentUser, updateUser } = useContext(MyContext);
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    if (currentUser) {
      const newTask = { task, date, time };
      const updatedUser = { ...currentUser, tasks: [...currentUser.tasks, newTask] };
      updateUser(updatedUser);
      setTask('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      {currentUser ? (
        <div>
          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} required />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          <button onClick={handleAddTask}>Add Task</button>
          <h3>My Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {currentUser.tasks.map((t, index) => (
                <tr key={index}>
                  <td>{t.task}</td>
                  <td>{t.date}</td>
                  <td>{t.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Please login to manage tasks</p>
      )}
    </div>
  );
};

export default TaskManager;
