import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
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
    const history=useHistory();
    const loginf=() =>{
        if(username=="test" && password=="test"){
            history.push("/");
        }else {
            console.log("no");
        }
    }
    return (
        <div className="login">


           <div className="bg_black">
            <div  className="login__section">
                    <h1>Login</h1>
                    <label htmlFor="username">UserName:</label>
                    <input name="username" placeholder="Username" type="text" value={username} onChange={handelInputUsername}/>
                    <label htmlFor="password">Password:</label>
                    <input name="password" placeholder="Password" type="password" value={password} onChange={handelInputPassword}/>
                    <button onClick={loginf} >Login</button>
                </div>
            </div>
        </div>
    )
}
