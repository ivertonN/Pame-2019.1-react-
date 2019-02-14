import React, { Component } from 'react';
import "./header.css"
import arrow from "../icons/baseline_keyboard_arrow_down_white_18dp.png";
import queue from "../icons/baseline_queue_music_white_18dp.png";

class Header extends Component {
    render() {
      return (
        <div id="container">
          <button>
            <img src={arrow} alt="flex_baixo" className="button"></img>
          </button>  
          <strong className="message">{this.props.name}</strong>
          <button>
            <img src={queue}  alt="fila_musicas" className="button"></img>
          </button>
        </div>
      ) 
   }
}

export default Header;