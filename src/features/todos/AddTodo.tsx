import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from './todoSlice';
import type { AppDispatch } from '../../app/store';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add
      </button>
    </form>
    <span/>
    <button
      type="button"
      onClick={() => dispatch(fetchTodos())}
      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
    >
      Load Sample Todos
  </button>
    </div>
  );
};

export default AddTodo;