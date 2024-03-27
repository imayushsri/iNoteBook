import React from 'react'

const NoteItem = (props) => {
    const {note} = props;
  return (
    <div class="card col-md-3 m-3">
  <div class="card-body">
    <div className="head">
    <h5 class="card-title">{note.title}</h5>
    <div className="icon">
    <i class="fa-regular fa-pen-to-square"></i>
    <i class="fa-regular fa-trash-can ms-2"></i>
    </div>
    </div>
    <p class="card-text">{note.description}</p>
  </div>
</div>
  )
}

export default NoteItem
