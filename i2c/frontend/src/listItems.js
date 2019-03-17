import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ViewWeek from '@material-ui/icons/ViewWeek';
import TrendingUp from '@material-ui/icons/TrendingUp';

const MainListItems = (props) => {
  return (
    <div>
      <ListItem onClick={() => props.changeComponent('weekly')} button>
        <ListItemIcon>
          <ViewWeek />
        </ListItemIcon>
        <ListItemText primary="Weekly" />
      </ListItem>
      <ListItem onClick={() => props.changeComponent('top')} button>
        <ListItemIcon>
          <TrendingUp />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItem>
    </div>
  );
};

export default MainListItems;
