import './App.css';
import AddTodo from './features/todos/AddTodo';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Todo App
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;