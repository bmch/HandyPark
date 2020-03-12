import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import moment from 'moment';
import ApiClient from '../../services/ApiClient';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Handy Parking
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  car_reg: {
    textTransform: 'uppercase'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ['Your details', 'Payment details', 'Review your booking'];

export default function Checkout({ id, price, start_date, end_date }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const initialState = {
    price: price,
    location_id: id,
    start_time: start_date,
    end_time: end_date,
    first_name: '',
    last_name: '',
    email: '',
    car_reg: ''
  };

  const [booking, setBooking] = React.useState(initialState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const postBooking = reqBody => {
    ApiClient.postBooking(reqBody).then(data => {
      console.log(data);
    });
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleChange={handleChange}
            first_name={booking.first_name}
            last_name={booking.last_name}
            email={booking.email}
            car_reg={booking.car_reg}
            email={booking.email}
          />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return (
          <Review
            start_date={start_date}
            end_date={end_date}
            price={price}
            first_name={booking.first_name}
            last_name={booking.last_name}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  const handleChange = event => {
    const { name, value } = event.target;
    console.log('event', event);
    console.log('name', name);
    console.log('value', value);
    setBooking({
      ...booking,
      [name]: value
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Booking Total: £{price}
          </Typography>
        </Toolbar>

        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {moment(start_date).format('MMM Do YYYY, h:mm a')} to{' '}
            {moment(end_date).format('MMM Do YYYY, h:mm a')}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your booking.
                </Typography>
                <Typography variant="subtitle1">
                  Your booking number is #2001539. We have emailed your booking
                  confirmation which includes directions to the car park.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleNext();
                      activeStep === steps.length - 1
                        ? postBooking(booking)
                        : console.log('activeStep - ', activeStep);
                    }}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? 'Confirm Booking'
                      : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
