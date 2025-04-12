import { TodoCard } from "./TodoCard";

export function TodoList(props) {

    const { todos, selectedTab, handleDeleteTodo
        , handleCompleteTodo
     } = props;

    

    let filterTodoList = selectedTab === "All" ?
        todos : selectedTab === 'Completed' ?
            todos.filter(todo => todo.complete) :
            todos.filter(todo => !todo.complete);
    

    return (
        <>
            {filterTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todo={todo}
                        todoIndex={todoIndex}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}
                    />
                    
                )
            })}
        </>
    )
  }