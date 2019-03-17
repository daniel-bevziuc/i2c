import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};



const SimpleTable = (props) => {
  const { classes, data } = props;
  const TableData = data.map((item, i) => {
    const date = new Date(item.week_commencing);
    return {
      ...item,
      week_commencing: moment(date.getTime()).format('L')
    };
  });
  
  let id = 0;
  function createData(product, week_commencing, exposed, control) {
    id += 1;
    return { id, product, week_commencing, exposed, control };
  }
  
  const tData = TableData.map((item, i) =>
    createData(
      item.product,
      item.week_commencing,
      item.exposed,
      item.control
    )
  );
  

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Week Commencing</TableCell>
            <TableCell align="right">Exposed</TableCell>
            <TableCell align="right">Control</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tData.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.product}
              </TableCell>
              <TableCell align="right">{n.week_commencing}</TableCell>
              <TableCell align="right">{n.exposed}</TableCell>
              <TableCell align="right">{n.control}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
