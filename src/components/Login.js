import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let history = useNavigate();
    const [credential, setcredential] = useState({email: "", password: ""});
   const handleLogin = async (e) =>{
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email : credential.email, password : credential.password})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        //save the token and Redirect
        localStorage.setItem('token', json.authToken);
        props.showAlert("Logged In", "success");
        history("/");
      }
      else{
        props.showAlert("Invalid Credentials", "danger")
        history("/login");
      }
    }

    const onChange = (event) => {
        setcredential({ ...credential, [event.target.name]: event.target.value })
    }
    return (
        <form className='container' onSubmit={handleLogin}>
            <div className="my-3">
              <h3 className='mb-3'>Login to continue to iNoteBook</h3>
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" value={credential.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" value={credential.password} onChange={onChange} className="form-control" id="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}

export default Login
