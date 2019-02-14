import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import color from '@material-ui/core/colors/teal';
import './Lista.css'
import play from '../icons/baseline_play_circle_outline_white_18dp.png'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 50,
  },
});

let id = 0;
function createData(music, artist) {
  id += 1;
  return { id, music, artist};
}

const rows = [
  createData('Bum Bum Tam Tam', "MC Fioti"),
  createData('Fuleragem', "Mc WM"),
  createData('O bebẽ', "Mc Kevinho/Mc Kekel"),
  createData('Amor de verdade', "Mc Kekel"),
  createData('Ta tum tum', "Mc Kevinho"),
  createData('Só você', "Dennis DJ"),
  createData('Din din din', "Ludmilla"),
  createData('Contatinho', "Nego do Borel"),
  createData('Solta a batida', "Ludmilla"),
  createData('Cheguei', "Ludmilla"),

];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} id="tabela">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><b id="letra">MÚSICAS</b></TableCell>
            <TableCell align="right"><b id="letra">ARTISTA</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" id="letra">
                {row.music}<br/><button><img src={play} alt="ouvir música"></img></button>
              </TableCell>
              <TableCell align="right" id="letra">{row.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
