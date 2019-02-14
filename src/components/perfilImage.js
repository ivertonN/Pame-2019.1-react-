import React, {Component} from 'react'
import userImage from '../icons/usuario.png'

class PerfilImage extends Component {
    render() {
      return (
        <div className="container">
        <br/>
        <img src={userImage} alt="imagem do usuário"></img>
        </div>
      );
    }
}

export default PerfilImage;