import React, { Component } from 'react';
import "./header.css"
import horiz from "../icons/baseline_more_horiz_white_18dp.png";
import circle from "../icons/baseline_add_circle_outline_white_18dp.png";

class Header extends Component {
    render() {
      return (
        <div id="container">
          <br/>
          <button>
            <img src={circle} alt="flex_baixo" className="button"></img>
          </button>  
          <strong className="message">{this.props.name}</strong>
          <button>
            <img src={horiz}  alt="fila_musicas" className="button"></img>
          </button><br/>
          <strong className="message">{this.props.name2}</strong>
        </div>
      ) 
   }
}

export default Header;