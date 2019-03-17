import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};

function SimpleTable(props) {
  const { classes, data } = props;

  let id = 0;
  function createData(metric, product, exposed, control, uplift, pct_uplift) {
    id += 1;
    return { id, metric, product, exposed, control, uplift, pct_uplift };
  }

  const tData = data.map((item, i) =>
    createData(
      item.metric,
      item.product,
      item.exposed,
      item.control,
      item.uplift,
      item.pct_uplift
    )
  );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Exposed</TableCell>
            <TableCell align="right">Control</TableCell>
            <TableCell align="right">Uplift</TableCell>
            <TableCell align="right">Pct Uplift</TableCell>
            <TableCell align="right">Metric</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tData.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.product}
              </TableCell>
              <TableCell align="right">{n.exposed}</TableCell>
              <TableCell align="right">{n.control}</TableCell>
              <TableCell align="right">{n.uplift}</TableCell>
              <TableCell align="right">{n.pct_uplift}</TableCell>
              <TableCell align="right">{n.metric}</TableCell>
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
