
import Notes from './Notes';


const Home = () => {
  
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
<Notes/>
    </div>
  )
}

export default Home
