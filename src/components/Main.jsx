import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Schedule from './Schedule';
import Harvests from './Harvests';
import styles from './Styles';

function Main(props){
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h1>Schedule</h1>
            <Schedule/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h1>Harvest</h1>
            <Harvests/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
