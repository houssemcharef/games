import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './Game';
import Home from './Home';
import SearchIcon from '@material-ui/icons/Search';
import axios from './axios.js'
import {Helmet} from "react-helmet";


function Interface() {

  const [affiche,setAffiche]=useState(false);
  const [type, setType]=useState('');
  const [games,setGames]=useState([]);

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
  


  useEffect(() =>{
    const fetchGames = async () =>
            await axios.get('/sync').then ((res) => {
            setGames(res.data.map(item => item));
          })
          fetchGames();
  }, []);
  
  return (
    <div className="App">
        <Home   affiche={setAffiche} setType={setType}  type={type}/>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com" />
          </Helmet>
        
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
