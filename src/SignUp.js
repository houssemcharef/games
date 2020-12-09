import React, { useState } from 'react';
import './SignUp.css'

export default function Signup(props) {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [Confirmepassword, setConformePassword]=useState('');
    const [email, setEmail]=useState('');
    const [image, setImage]=useState('');

    const handelInputUsername= (event)=>{
        setUsername(event.target.value);
    }

    const handelInputPassword= (event) => {
        setPassword(event.target.value);
    }
    const handelInputConfirmePassword= (event) => {
        setConformePassword(event.target.value);
    }
    const handelInputEmail= (event) => {
        setEmail(event.target.value);
    }
    
    
    const handleInputImage= (event) => {
        setImage(event.target.value);
        console.log(image);
    }

    return (
        <div className="signup">
            <div className="bg_black">
            <div  className="login__section height-650">
                    <h1>Sign Up</h1>
                    <label htmlFor="username">UserName:</label>
                    <input name="username" placeholder="Username" type="text" value={username} onChange={handelInputUsername}/>

                    <label htmlFor="password">Password:</label>
                    <input name="password" placeholder="Password" type="password" value={password} onChange={handelInputPassword}/>

                    <label htmlFor="confirmepassword">Comfirm Password:</label>
                    <input name="confirmepassword" placeholder="Confirme Password" type="password" value={Confirmepassword} onChange={handelInputConfirmePassword}/>

                    <label htmlFor="email">Email:</label>
                    <input name="email" placeholder="email" type="email" value={email} onChange={handelInputEmail}/>

                    <label htmlFor="image">image:</label>
                    <input name="image" type="file" value={image} onChange={handleInputImage}/>

                    <button >Sign Up</button>
                </div>
            </div>
        </div>
    )
}
