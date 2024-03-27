import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {

    const [note, setNote] = useState({ etitle: '', edescription: '', etag: 'default' })

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }
    const handleEditNote = (event) => {
        event.preventDefault();
        console.log("Updating the note...", note)
    }

  const context = useContext(noteContext);
  const { notes, getNotes, addNote } = context;
  useEffect(() => {
    getNotes();
  }, [])

  const updateNote = (currentNote) => {
     ref.current.click();
     setNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  }
  const ref = useRef(null)
  return (
    <>
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
                <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleEditNote} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
      <AddNote />
      <div className="row my-3">
        <h3>Your Notes</h3>
        {notes.map((note) => {
          return <NoteItem note={note} updateNote={updateNote} key={note._id} />
        })}
      </div>
    </>
  )
}

export default Notes
