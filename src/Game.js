import React, { useState } from 'react';
import './Game.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Comment from './Comment';
import IconButton from '@material-ui/core/IconButton';


export default function Game(props) {
    
    const [v ,setV]=useState(false);
    const [comment,  setComment]=useState('');

    let [comments, setComments]=useState([
        {
            name:"test", 
            image:"https://avatars1.githubusercontent.com/u/62062663?s=460&u=1aa570519a31b68874847c4cb2a2f1186c19cc72&v=4", 
            comment:"msldmsldsdmsmdls"
        },
        {
            name:"test1", 
            image:"https://avatars1.githubusercontent.com/u/62062663?s=460&u=1aa570519a31b68874847c4cb2a2f1186c19cc72&v=4", 
            comment:"sdsdsdsdsds"
        },
        {
            name:"test3", 
            image:"https://avatars1.githubusercontent.com/u/62062663?s=460&u=1aa570519a31b68874847c4cb2a2f1186c19cc72&v=4", 
            comment:"sdsdsdss"
        },
    ]);

    const handelComment = (e) => {
        console.log("valeur 1="+v);
        if(v===false){
            setV (true);
        }else{
            setV (false);
        }
        
        console.log("valeur 2="+v);
        e.preventDefault();
    }
    
    const handleChangeComment = (e) =>{
        setComment(e.target.value);
        console.log(comment);
    }
    const addComment = () => {
        setComments([...comments,{
            name:"test3", 
            image:"https://avatars1.githubusercontent.com/u/62062663?s=460&u=1aa570519a31b68874847c4cb2a2f1186c19cc72&v=4", 
            comment:comment
        }]);
    }

    return (
        <div>
            <div className="game">
            
                <div className="game__image">
                    <img src={props.image} alt="ss" />
                </div>
                <div className="game__info">
                    <div className="game__name">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="game__type">
                    <h3>type: </h3> <p>{props.type}</p> 
                    </div>
                    <div className="game__rating">
                    <h3>rating: </h3> <p>{props.ratting}</p>
                    </div>
                    <div className="game__price">
                    <h3>price: </h3><p>{props.price}$</p>
                    </div>

                    <div className="game__platform">
                    <h3>platforme: </h3> <p>{props.platforme}</p> 
                    </div>

                    <div className="game__description">
                    <h3>description: </h3> <p>{props.description}</p>
                    </div>
                </div>   
            </div>
            <div className="commentaire">
                <div className="button__comentaire">
                    <IconButton className="iconbutton" onClick={handelComment}>
                        <h3>comments</h3>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </div>
                <div className="form">
               

                {v &&<> 
                        {comments.map((comment, i) => 
                            (<Comment 
                                key={i}
                                name={comment.name} 
                                image={comment.image} 
                                comment={comment.comment}
                            />)
                         )}
                         <div className="user_comment">
                            <textarea className="comment_input" value={comment} onChange={handleChangeComment} >
                                    
                            </textarea>
                            <button className="send_Button" onClick={addComment}> send comment </button>
                        </div>
                    </>
                    }
                    
                    
                    
                </div>
            </div>
        </div>
    )
}
