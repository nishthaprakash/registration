import React, { useState } from 'react';
import './App.css';

const Register = () => {
    const [user, setUser]=useState({
        name:"",
        email:"",
        password:"",
        password_confirm:""
    });
    let name,value;
    const handleInput=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
    }
    const onSubmitSignup =(e)=>{
        const formData = new FormData(e.target)
        const data = {}
        e.preventDefault()
        for (let entry of formData.entries()) {
            data[entry[0]] = entry[1]
        }
        console.log(data);
    }
    return (
        <>
            <h1>Registration Page</h1>
            <form action method="POST" onSubmit={(e)=>onSubmitSignup(e)}>
                <div className="row">
                    <div className="col-md-2">
                    <label htmlFor="username">Username</label><br />
                    <label htmlFor="email">E-mail</label><br />
                    <label htmlFor="password">Password</label><br />
                    <label htmlFor="password_confirm">Password (Confirm)</label><br />
                </div>
                    <div className="col-md-2">
                    <input type="text" 
                      name="name"
                      id="name"
                      value={user.name}
                      onChange={handleInput}
                      placeholder="Your name" 
                    /><br />
                     <input type="email" 
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Your email" 
                    />  <br />
                    <input type="password" 
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="Your password" 
                    />  <br />
                    <input type="password" 
                        name="password_confirm"
                        id="password_confirm"
                        value={user.password_confirm}
                        onChange={handleInput}
                        placeholder="Confirm password" 
                    /> <br />                         
                </div>
                </div>
                <button >Register</button>
                               
            </form>
        </>
    )}
export default Register;