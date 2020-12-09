import React, { useState } from 'react';
import './App.css';
import Game from './Game';
import Home from './Home';
import SearchIcon from '@material-ui/icons/Search';



function Interface() {

  const [affiche,setAffiche]=useState(false);
  const [type, setType]=useState();
  const afficheGame= () =>{
    
    if(type==='all') {
       return games.map((game)=>{
       return <Game 
        platforme={game.platforme}
        image={game.image} 
        title={game.title}
        ratting={game.ratting}
        price={game.price}
        description={game.description}
        type={game.type}
        />
      }) 
    } else {
       return games.map((game)=>{
        return type===game.type &&
        <Game 
        platforme={game.platforme}
        image={game.image} 
        title={game.title}
        ratting={game.ratting}
        price={game.price}
        description={game.description}
        type={game.type}
        />
      } )
    }
    
        
    
        
      }
  

  const [games,setGames]=useState([
    {
      "platforme":"xxx",
      "image":"https://image.jeuxvideo.com/medias/160561/1605605267-9660-capture-d-ecran.png", 
      "title":"test", 
      "ratting":"9/10", 
      "price":"20" ,
      "description":"uis vous pourrez passer aux niveaux qui suivent :Niveaux principaux* Froid, moi ? Jamais !" ,
      "type": "aventure"                                 
    },
    { "platforme":"ss",
      "image":"https://image.jeuxvideo.com/medias/160561/1605605267-9660-capture-d-ecran.png", 
      "title":"test1", 
      "ratting":"20/10", 
      "price":"100" ,
      "description":"smldsmldls sdkmskds dsldmsd sld slld,sldsdqslfdlfdf dklfndkfnsdl fsdf",  
      "type": "action"                               
    }
  ]);

  
  
  
  return (
    <div className="App">
        <Home   affiche={setAffiche} setType={setType}  type={type}/>
        
        {affiche && <>
                         <div className="app__search">
                            <input className="recherche" />
                            <SearchIcon className="search"/>
                       </div>
                          
                     </> }
        {affiche && afficheGame() }
                    

    </div>
  );
}

export default Interface;
