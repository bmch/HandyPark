import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import LocationForm from './LocationForm';

export default function AddCarPark({postLocation}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Link  color="primary"  onClick={handleClickOpen}>
          Add New Car Park
      </Link>


      <Dialog fullWidth="true" postLocation={postLocation} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <LocationForm postLocation={postLocation} handleClose={handleClose}/>
      </Dialog>
    </div>
  );
}