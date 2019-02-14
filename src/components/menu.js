import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import color from '@material-ui/core/colors/red';
import './menu.css';

class ControlledTooltips extends React.Component {
  state = {
    open: false,
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
        <div className="conteiner">
            <Tooltip
                onClose={this.handleTooltipClose}
                onOpen={this.handleTooltipOpen}
                open={this.state.open}
                title="mostrar letra"
            >
                <Button id="Letra"> Letra</Button>
            </Tooltip>
        </div>
    );
  }
}

export default ControlledTooltips;
