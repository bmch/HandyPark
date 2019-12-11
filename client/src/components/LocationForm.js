import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function LocationForm({postLocation, handleClose}) {

  const BASE_URL = 'http://localhost:3001/location';

  const [locations, setLocations] = useState([])
  
  useEffect(() => { updateLocations() }, [])
  
  const updateLocations = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLocations({ places: data})
      });
  }
  

  const classes = useStyles();

  const initialState = { address: 'Carrer d Àvila, 27, 08005 Barcelona', price: '2', daily_price: 7, weekly_price: '28', monthly_price: '75',  image: 'https://images.unsplash.com/photo-1568738009519-52d1bad47858', lat: '41.394964', lng: '2.198154' }
  const [newLocation, setLocation] = useState(initialState)


  const handleChange = e => {
    setLocation({
      ...newLocation,
      [e.target.name]: e.target.value
    });
  };  

  const handleSubmit = e => {
    e.preventDefault();
  //  if (errors.address || errors.price || errors.image || errors.lat || errors.lng ) {return}
    postLocation({
      formatted_address: newLocation.address,
      price: newLocation.price,
      daily_price: newLocation.daily_price,
      weekly_price: newLocation.weekly_price,
      monthly_price: newLocation.monthly_price,
      image: newLocation.image,
      location: {
      lat: newLocation.lat,
      lng: newLocation.lng
        }
     })
    setLocation(initialState);
  };

  const validate = ({ address, price, image, lat, lng}) => {
    return {
      address: !address || address.trim().length === 0
        ? "address is required"
        : false,
      price: !price || price.trim().length === 0
          ? "price is required"
          : false,
      image: !image || image.trim().length === 0
          ? "image is required"
          : false,
      lat: !lat || lat.trim().length === 0
          ? "lat is required"
          : false,
      lng: !lng || lng.trim().length === 0
          ? "lng is required"
          : false,
     };
  };


  return (



    <div className="add-carpark">

    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
    
    
      <h1>New Car Parking Lot</h1>

      
      <TextField
      className={classes.textField}
        label="Address"
        margin="normal"
        variant="outlined"
        value={newLocation.address}
        name='address'
        onChange={handleChange}    
      />

      {/* {errors.title && 
         <span className="error">{errors.title}</span>
       } */}
      <br></br>
      <br></br>

      <TextField
        className={classes.textField}
        label="Hourly Rate"
        margin="normal"
        variant="outlined"
        value={newLocation.price}
        name='price'
        onChange={handleChange}
      />
  <br></br>
      <TextField
        className={classes.textField}
        label="Daily Rate"
        margin="normal"
        variant="outlined"
        value={newLocation.daily_price}
        name='daily_price'
        onChange={handleChange}
      />
  <br></br>
    <TextField
        className={classes.textField}
        label="Weekly Rate"
        margin="normal"
        variant="outlined"
        value={newLocation.weekly_price}
        name='weekly_price'
        onChange={handleChange}
      />
  <br></br>
    <TextField
        className={classes.textField}
        label="Monthly Rate"
        margin="normal"
        variant="outlined"
        value={newLocation.monthly_price}
        name='monthly_price'
        onChange={handleChange}
      />



      {/* {errors.price && 
         <span className="error">{errors.price}</span>
       } */}
      <br></br>
      <br></br>


      {/* {errors.image && 
         <span className="error">{errors.image}</span>
       } */}
  
  

      <TextField
        className={classes.textField}
        label="Image URL"
        margin="normal"
        variant="outlined"
        value={newLocation.image}
        name='image'
        onChange={handleChange}
      />


       
      <TextField
        className={classes.textField}
        label="Google Map Lat"
        margin="normal"
        variant="outlined"
        value={newLocation.lat}
        name='lat'
        onChange={handleChange}
      />


      {/* {errors.venue && 
         <span className="error">{errors.lat}</span>
       } */}
      <br></br>


      <TextField
        className={classes.textField}
        label="Google Map lng"
        margin="normal"
        variant="outlined"
        value={newLocation.lng}
        name='lng'
        onChange={handleChange}
      />

      {/* {errors.venue && 
         <span className="error">{errors.lng}</span>
       } */}
      <br></br>


      <Button onClick={handleClose} variant="contained" type="submit" value="Create" color="primary" className={classes.button}>
        Add Car Park
      </Button>

    </form>
    </div>

  
  );
}

export default LocationForm;