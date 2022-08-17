function TodoCard({todo, onDelete}) {
    
    function handleDelete() {
        onDelete(todo.id);
    }

    return (
        <div>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
            <h5>{todo.category.name}</h5>
            <p>{todo.due_date}</p>
            <p>{todo.effort}</p>
            <form onSubmit={handleDelete}>
                <button type='submit'>Delete</button>
            </form>
        </div>
    )
}

export default TodoCard;