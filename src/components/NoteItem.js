import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';


const NoteItem = (props) => {
  const context = useContext(noteContext);
    const {note} = props;
    const {deleteNote} = context;
  return (
    <div className="col-md-3">
    <div className="card m-3">
  <div className="card-body">
    <div className="head">
    <h5 className="card-title">{note.title}</h5>
    <div className="icon">
    <i className="fa-regular fa-pen-to-square"></i>
    <i className="fa-regular fa-trash-can ms-2" onClick={()=>{
      deleteNote(note._id)
    }}></i>
    </div>
    </div>
    <p className="card-text">{note.description}</p>
    <span className="badge text-bg-dark">{note.tag}</span>
  </div>
</div>
</div>
  )
}

export default NoteItem
