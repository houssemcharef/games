import React, { useState } from 'react';
import './App.css';
import Game from './Game';
import Home from './Home';
import SearchIcon from '@material-ui/icons/Search';



function App() {

  const [affiche,setAffiche]=useState(false);
  
  return (
    <div className="App">
        <Home   affiche={setAffiche} />
        

        {affiche && 

                    <>
                    <div className="app__search">
            <input className="recherche" />
            <SearchIcon className="search"/>
        </div>
                      <Game platforme="ps5" image="https://image.jeuxvideo.com/medias/160561/1605605267-9660-capture-d-ecran.png" title="test" ratting="9/10" price="20" description="uis vous pourrez passer aux niveaux qui suivent :
                                            Niveaux principaux
                                            * Froid, moi ? Jamais !
                                            " />
                           
                    </>
          }
    </div>
  );
}

export default App;
