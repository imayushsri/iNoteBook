
// import Notes from './Notes';

import AddNote from "./AddNote";


const Home = (props) => {
  const {showAlert} = props;
  return (
    <div className='container'>
      <AddNote showAlert={showAlert}/>
    </div>
  )
}

export default Home
