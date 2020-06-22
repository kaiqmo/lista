import React from 'react';
import './footer.component.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    square:false
  },
}));


const Footer = ()=> {
    const classes= useStyles();
    return(
    <div className="footer">
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Criador: Kaique</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Email: kaiqmowork@gmail.com</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Github: @kaiqmo</Paper>
        </Grid>
      </Grid>
        
        
         
 
    </div>
)};
export default Footer;