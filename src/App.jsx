import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done
    if (filter === 'done') return todo.done
    return true
  })

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, done: false }])
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <Header />
      <TodoInput onAdd={addTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
