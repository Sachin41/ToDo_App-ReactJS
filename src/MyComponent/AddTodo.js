import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can not be blank");
        } else {
            addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <div className='container my-3 mb-5'>
            <form onSubmit={submit}>
                <h3 className='my-3'>Add a ToDo</h3>
                <div className="form-group mb-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" onChange={(e) => setDesc(e.target.value)} placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
