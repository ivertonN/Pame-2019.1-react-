import React, {Component} from 'react'
import './opcoesMenu.css'

class OpcoesMenu extends Component {
    render() {
      return (
        <div className="container">
          <button className="nome">
            Perfil
          </button>
          <button className="nome">
            Podcasts
          </button>
          <button className="nome">
            Dj's
          </button>
          <button className="nome">
            Músicas
          </button>
          <button className="nome">
            Favoritos
          </button>
          <button className="nome">
            Contato
          </button>
        </div>
      );
    }
}

export default OpcoesMenu