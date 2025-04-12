import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {

  const Initialtodos = [
    { input: 'Hello! Begin execcise boy', complete: true },
    { input: 'Get the groceries', complete: false },
    { input: 'Learn how to code a website', complete: false },
    { input: 'say hi to your parents', complete: true },
    { input: 'Get a new app running', complete: false }
  ];

  const [selectedTab, setSelectedTab] = useState('Open')
  const [todos, setTodos] = useState(Initialtodos);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos,
      {input: newTodo, complete: false}
    ]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index]
    completedTodo.complete = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({
      todos: currTodos
    }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  },[])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
       />
      <TodoList todos={todos} selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
   </>
  )
}

export default App
