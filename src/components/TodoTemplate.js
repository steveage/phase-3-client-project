import { useState } from "react";

function TodoTemplate({categories, todoAdded}) {
    const categoriesUi = categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        due_date: "",
        effort: 0,
        category_id: 1
    });

    function handleChange(event) {
        setTodo({...todo, [event.target.name]: event.target.value,});
    }

    function handleSubmit(event) {
        todoAdded(todo);
    }

    return (
        <div>
            <h3>New todo item:</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:<input type="text" name="title" value={todo.title} onChange={handleChange}/></label>
                <label>Description:<input type="text" name="description" value={todo.description} onChange={handleChange}/></label>
                <label>Due Date:<input type="text" name="due_date" value={todo.due_date} onChange={handleChange}/></label>
                <label>Effort:<input type="number" name="effort" value={todo.effort} onChange={handleChange}/></label>
                <label>Category:
                    <select name="category_id" value={todo.category_id} onChange={handleChange}>
                        {categoriesUi}
                    </select>
                </label>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoTemplate;