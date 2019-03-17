import React from 'react';
import PropTypes from 'prop-types';
import HttpService from './services/http-service';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './listItems';
import WeeklyLineChart from './components/weekly/WeeklyLineChart';
import WeeklyTable from './components/weekly/WeeklyTable';
import TopChart from './components/top/TopChart';
import TopTable from './components/top/TopTable';
import styles from './styles';

class Dashboard extends React.Component {
  state = {
    open: true,
    currentComponent: 'weekly',
    data: []
  };

  async componentDidMount() {
    const data = await HttpService.getData(this.state.currentComponent);
    this.setState({ data });
  }

  changeComponent = async _value => {
    const data = await HttpService.getData(_value);
    this.setState({ currentComponent: _value, data });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { currentComponent, data } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              i2c Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <MainListItems changeComponent={this.changeComponent} />
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2">
            Products Chart
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            {currentComponent === 'weekly' ? (
              <WeeklyLineChart data={data} />
            ) : (
              <TopChart data={data} />
            )}
          </Typography>
          <Typography variant="h4" gutterBottom component="h2">
            Products Table
          </Typography>
          <div className={classes.tableContainer}>
            {currentComponent === 'weekly' ? (
              <WeeklyTable data={data} />
            ) : (
              <TopTable data={data} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
