import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import AddCarPark from './AddCarPark';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders2({ locations, postLocation }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Car Parks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Car Park Address</TableCell>
            <TableCell>Hourly Price</TableCell>
            <TableCell align="right">Montly Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locations.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.formatted_address}</TableCell>
              <TableCell>£{row.price}</TableCell>
              <TableCell align="right">£{row.monthly_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <AddCarPark postLocation={postLocation} />
      </div>
    </React.Fragment>
  );
}
