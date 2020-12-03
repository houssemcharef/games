import React, { useState } from 'react'
import "./Login.css"
export default function Login(props) {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handelInputUsername= (event)=>{
        
        setUsername(event.target.value);
    }

    const handelInputPassword= (event) => {
        setPassword(event.target.value);
    }
    return (
        <div className="login">
           <div className="bg_black">
            <div  className="login__section">
                    <h1>Login</h1>
                    <label htmlFor="username">UserName:</label>
                    <input name="username" placeholder="Username" type="text" value={username} onChange={(event)=>handelInputUsername(event)}/>
                    <label htmlFor="password">Password:</label>
                    <input name="password" placeholder="Password" type="password" value={password} onChange={(event)=>handelInputPassword(event)}/>
                    <button >Login</button>
                </div>
            </div>
        </div>
    )
}
