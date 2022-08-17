import TodoCard from './TodoCard';

function Home({todos, onDelete}) {
    const todoListUi = todos.map( todo => 
        <li key={todo.id}>
            <TodoCard key={todo.id} todo = {todo} onDelete = {onDelete}/>
        </li>
    )

    return (
        <div>
            <p>Here are the tasks that need to be attended soon:</p>
            <ul>{todoListUi}</ul>
        </div>
    )
}

export default Home;