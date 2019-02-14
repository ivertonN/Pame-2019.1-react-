import React, { Component } from 'react';
import shuffle from '../icons/baseline_shuffle_white_18dp.png'
import pause from '../icons/baseline_pause_circle_outline_white_18dp.png'
import back from '../icons/baseline_skip_previous_white_18dp.png'
import next from '../icons/baseline_skip_next_white_18dp.png'
import './play.css'

class Play extends Component {
    render() {
      return (
          <div className="conteiner">
                <br/>
                <img src={shuffle} alt="shuffle"></img>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={back} alt="back"></img>
                <img src={pause} alt="pause"></img>
                <img src={next} alt="next"></img>
          </div>
      );
    }
  }
  
  export default Play;