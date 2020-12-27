import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { FC } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { InvoicesModule } from '..';
import { DisplayMode } from '../../../enums/DisplayMode';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  nonactive: {
    color: '#98abd7 !important'
  },
  active: {
    color: '#68e1af !important'
  }
})

const DisplayModeComponent: FC = () => {
  const classes = useStyles();
  const { display } = InvoicesModule.Store;

  return (
    <Box className={classes.root}>
      <IconButton
        disabled={display === DisplayMode.CARD}
        className={
          display === DisplayMode.CARD
            ? classes.active
            : classes.nonactive
        }
        onClick={() => {
          InvoicesModule.Store.lens().for('filters').for('display').set(DisplayMode.CARD);
        }}
      >
        <ViewModuleIcon />
      </IconButton>

      <IconButton
        disabled={display === DisplayMode.LIST}
        className={
          display === DisplayMode.LIST
            ? classes.active
            : classes.nonactive
        }
        onClick={() => {
          InvoicesModule.Store.lens().for('filters').for('display').set(DisplayMode.LIST);
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}

export default observer(DisplayModeComponent);