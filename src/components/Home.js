import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';


const Home = () => {
  const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <div>
      <div className="container my-3">
      <h3>Add A Note</h3>

      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='discription'/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag'/>
  </div>
  <button type="submit" className="btn btn-primary">Add Note</button>
</form>
</div>
<div className="container my-3">
      <h3>Your Notes</h3>
      {notes.map((note)=>{
        return note.title
      })}
    </div>
    </div>
  )
}

export default Home
