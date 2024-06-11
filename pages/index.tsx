// pages/index.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import TaskList from '../components/TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">TO-DO List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
          className="w-full px-3 py-2 mr-2 rounded-md border border-gray-300"
        />
        <button onClick={addTask} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </Layout>
  );
};  

export default Home;
