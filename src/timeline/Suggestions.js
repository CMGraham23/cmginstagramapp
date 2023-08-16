import React from 'react';
import { Avatar } from '@mui/material';
import './Suggestions.css';

function Suggestions() {
  return <div className="suggestions">
    <div className="suggestions__title">Suggestion for you</div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
          <span className="avatar">
          <Avatar>C</Avatar>
          </span>
          <div className="username__info">
            <span className="username">christine_</span>
            <span className="relation">New to Instagram</span> 
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>  
      
      <div className="suggestion__username">
          <div className="username__left">
          <span className="avatar">
          <Avatar>T</Avatar>
          </span>
          <div className="username__info">
            <span className="username">toneke_</span>
            <span className="relation">New to Instagram</span> 
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>  

      <div className="suggestion__username">
          <div className="username__left">
          <span className="avatar">
          <Avatar>D</Avatar>
          </span>
          <div className="username__info">
            <span className="username">daniel_</span>
            <span className="relation">New to Instagram</span> 
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>  

      <div className="suggestion__username">
          <div className="username__left">
          <span className="avatar">
          <Avatar>Y</Avatar>
          </span>
          <div className="username__info">
            <span className="username">yoneke_</span>
            <span className="relation">New to Instagram</span> 
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>  

      <div className="suggestion__username">
          <div className="username__left">
          <span className="avatar">
          <Avatar>L</Avatar>
          </span>
          <div className="username__info">
            <span className="username">leroy_</span>
            <span className="relation">New to Instagram</span> 
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>  
      
      </div>
    </div>; 
}

export default Suggestions;
