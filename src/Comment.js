import React from 'react';
import './Comment.css';
import Avatar from '@material-ui/core/Avatar';


export default function Comment({image, name, comment}) {
    

    return (
        <div className="comment">
            <div className="user_info">
                <Avatar alt="houssem" src={image} />
                <p>{name}</p>
            </div>
            <p>{comment} </p>
            <hr className="line"/>
            
        </div>
    )
}
