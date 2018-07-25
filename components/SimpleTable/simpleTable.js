import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const { classes } = props;
  
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>College</TableCell>
            <TableCell>Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((n,index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {n[0] + ' ' + n[1]}
                </TableCell>
                <TableCell>{n[2]}</TableCell>
                <TableCell>{n[3]}</TableCell>
                <TableCell>{n[4]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);