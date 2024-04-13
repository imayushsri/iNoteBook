import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  let history = useNavigate();
  const [credential, setcredential] = useState({name:"", email:"", password:"", cpassword:""});
  const handleSignUp = async (e) => {
    e.preventDefault();
    const {name, email, password} = credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the token and Redirect
      localStorage.setItem('token', json.authToken);
      history("/login");
      props.showAlert("Successfully SignUp","success");
    }
    else {
      props.showAlert("Invalid Credentials","danger");
    }
  }

  const onChange = (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value })
  }
  return (
    <form className='container' onSubmit={handleSignUp}>
      <div className="my-3">
        <h3 className='mb-3'>Create an account to use iNoteBook</h3>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' onChange={onChange} minLength={3} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} minLength={10}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5}/>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5}/>
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default SignUp
