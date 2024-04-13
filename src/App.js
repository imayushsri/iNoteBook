import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,typo) =>{
    setAlert({
      msg : message,
      typo : typo
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    <NoteState>
    <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div>
        <Routes>
          <Route  path='/' exact element={<Home showAlert={showAlert}/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/login' exact element={<Login showAlert={showAlert}/>}></Route>
          <Route path='/signup' exact element={<SignUp showAlert={showAlert}/>}></Route>
        </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
