import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: '', description: '', tag: '' })

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }
    const handleAddNote = (event) => {
        event.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: '', description: '', tag: '' })
    }
    return (
        <div className="container my-3">
            <h3>Add A Note</h3>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input required minLength={5} value={note.title} type="text" className="form-control" id="title" name='title' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input required minLength={5} value={note.description} type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input  type="text" value={note.tag} className="form-control" id="tag" name='tag' onChange={onChange} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
