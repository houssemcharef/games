import React, { useEffect, useState } from 'react';
import { DataGrid, ValueFormatterParams } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import './Table.css'
import axios from './axios'
import { useHistory } from "react-router-dom";
import Modal from 'react-modal';



export default function TableAdmin(props) {

  const [games, setGames]= useState([]);
  const [title, setTitle]=useState('');
  const [platforme, setPlatforme]=useState('');
  const [ratting, setRatting]=useState('');
  const [price, setPrice]=useState('');
  const [image, setImage]=useState('');
  const [description, setDescription]=useState('');
  const [type, setType]=useState('');
  const [id, setId]=useState('');
  const send = async (event) =>{
    event.preventDefault();
     const url='/update/'+id;
      await axios.put(url, {
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
  let history = useHistory();
  function handleClick() {
    history.push("/addgame");
  }
  
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal(game) {
      setIsOpen(true);
      
      setDescription(game.description);
      setTitle(game.title);
      setImage(game.image);
      setPlatforme(game.platforme);
      setPrice(game.price);
      setRatting(game.ratting);
      setId(game._id);
      
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
  
   useEffect(() =>{
    const fetchGames = async () =>
            await axios.get('/sync').then ((res) => {
              setGames(res.data.map(item => {return item }));
              console.log(games);
            })
          fetchGames();
    


  }, []);
  const del = async (event)=> {
   
    const url='/delete/'+event.target.id;
    await axios.delete(url).then ((res) => {
      console.log("delete success");
  })
  }
    

  
    return (
        <div className="table">
        
        <Button onClick={handleClick} className="add__button" variant="outlined" color="primary" startIcon={<AddIcon/>}>
            Add
        </Button>
        <table>
        
        {games.map(games=> {
          console.log(games)
          return <tr>
              <td>{games._id}</td>
              <td>{games.title}</td>
              <td><button class="btn-green" onClick={del} id={games._id}>deletae</button></td>
              <td><button class="btn-green" onClick={()=>openModal(games)} id={games._id}>modify</button></td>
            </tr>
        }

        
         
        )}
        </table>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
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
                    <button onClick={send} id="">edit Game</button>
          </form>
        </Modal>
        </div>
    )
}
