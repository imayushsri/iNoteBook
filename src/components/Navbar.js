import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [name, setName] = useState("");
  const getUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      const json = await response.json();
      setName(json.name);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }
  // console.log(UserDets);
  let history = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    history("/login");
  }
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserDetails();
    }
  }, []);
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme = 'dark'>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/'? 'active' : ''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token') ? <form className='d-flex'>
        <Link className="btn btn-outline-primary mx-2" to='/login' role="button">Login</Link>
        <Link className="btn btn-outline-primary mx-2" to='/signup' role="button">Sign Up</Link>
        </form> :<><div className='me-4 text-light'><i className="fa-regular fa-user text-light"></i><b className='ms-2'>{name}</b></div> <button onClick={handleLogout} className='btn btn-outline-primary'>Log Out</button></>}
    </div>
  </div>
</nav>
  )
}

export default Navbar
