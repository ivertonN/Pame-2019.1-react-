import React, { Component } from 'react';
import Header from './components/header.js';
import Art from './components/art.js';
import './App.css'
import TrackArtist from './components/trackArtist.js'
import Play from './components/play.js'
import ControlledTooltips from './components/menu.js'

import PerfilImage from './components/perfilImage.js'
import OpcoesMenu from './components/opcoesMenu.js'

import Lista from './components/Lista.js'
import arrow from './icons/baseline_keyboard_arrow_down_white_18dp.png'
import lupa from './icons/baseline_search_white_18dp.png'
import back from './icons/baseline_keyboard_backspace_white_18dp.png'

class Player extends Component {
  render() {
    return (
      <div className="container">
        <Header name="Tocando playlist"/>
        <Art/>
        <TrackArtist name="Bum Bum Tam Tam" name2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mc Fioti"/>
        <Play/>
        <ControlledTooltips/>
      </div>
    );
  }
}


class MenuPrincipal extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <br/>
          <b>Nome de usuário<br/></b>
          <PerfilImage/>
          <OpcoesMenu/>
        </div>
      </div>
    );
  }
}

class ListaMusicas extends Component {
  render(){
    return (
      <div className="container">
        <div className="relative">
          <Play id ="play"/>
          <p id="musica">Musica sendo tocada</p>
          <div id="opcoes">
            <img src={back} alt="volta ao menu inicial"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={arrow} alt="exibe o player"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={lupa} alt="procurar musica"></img>
          </div>
        </div>
        <div id="lista">
          <Lista/>
        </div>
      </div>
    )
  }
}

export default ListaMusicas;