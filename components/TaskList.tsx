// components/TaskList.tsx
import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(task.id)}
            className="mr-2"
          />
          <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
          <button onClick={() => onDelete(task.id)} className="ml-2 text-red-600">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
