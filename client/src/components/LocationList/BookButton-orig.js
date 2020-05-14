import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Checkout from '../Booking/Checkout';

export default function BookButton({ id, price, start_date, end_date }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: 'rgb(241, 89, 44)', color: 'white' }}
        onClick={handleClickOpen}
      >
        Book
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Checkout
          id={id}
          price={price}
          start_date={start_date}
          end_date={end_date}
        />
      </Dialog>
    </div>
  );
}
