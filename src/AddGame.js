import React, { useState } from 'react';
import axios from './axios'

export default function AddGame(props) {


        const [title, setTitle]=useState('');
        const [platforme, setPlatforme]=useState('');
        const [ratting, setRatting]=useState('');
        const [price, setPrice]=useState('');
        const [image, setImage]=useState('');
        const [description, setDescription]=useState('');
        const [type, setType]=useState('');
        const send = async () =>{
            await axios.post('/addgame', {
                platforme: platforme,
                image:image, 
                title:title, 
                ratting:ratting, 
                price: price,
                description:description ,
                type: type
            }).then(console.log("success"))
        
        }
        const handelInputTitle= (event)=>{
            setTitle(event.target.value);
        }

        const handelInputPlatforme= (event) => {
            setPlatforme(event.target.value);
        }
        const handelInputRatting = (event) => {
            setRatting(event.target.value);
        }
        const handelInputPrice = (event) => {
            setPrice(event.target.value);
        }
        
        const handleInputImage= (event) => {
            setImage(event.target.value);
        }
        const handleInputDescription = (event) => {
            setDescription(event.target.value);
        }
        const handleSelect = (event) => {
            
            setType(event.target.value);
            console.log(type);
        }

       

       
    return (
        <div className="addgame">
            <div  className="login__section height-650">
                    <h1>Sign Up</h1>
                    <label htmlFor="title">title:</label>
                    <input name="title" placeholder="title" type="text" value={title} onChange={handelInputTitle}/>

                    <label htmlFor="platforme">platforme:</label>
                    <input name="platforme" placeholder="platforme" type="text" value={platforme} onChange={handelInputPlatforme}/>

                    <label htmlFor="ratting">ratting:</label>
                    <input name="ratting" placeholder="ratting" type="text" value={ratting} onChange={handelInputRatting}/>

                    <label htmlFor="price">price:</label>
                    <input name="price" placeholder="price" type="text" value={price} onChange={handelInputPrice}/>

                    <label htmlFor="image">imageURL:</label>
                    <input name="image" type="text" value={image} onChange={handleInputImage}/>

                    <label htmlFor="description">description:</label>
                    <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={handleInputDescription}>

                    </textarea>

                    <select id="type" onChange={handleSelect}>
                        <option disabled selected>select type</option>
                        <option value="action">action</option>
                        <option value="aventure" >aventure</option>
                    </select>


                    <button onClick={send}>Add Game</button>
                </div>
            </div>
        
    )
}
