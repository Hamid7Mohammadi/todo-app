

export function Header(props) {


    const { todos } = props

    let filteredTodo = todos.filter((todo) => !todo.complete).length
   
    const isTasksPlural = todos.length != 1

    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    

    return (
        <header>
            <h1 className="text-gradient">You have {filteredTodo} open {taskOrTasks}.</h1>
        </header>
    )
}