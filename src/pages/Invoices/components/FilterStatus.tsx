import { Box, Button, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { InvoiceStatuses } from '../../../enums/InvoiseStatus';
import getLang from '../../../langvars/getLang';
import { InvoicesModule } from '..';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  button: {
    borderRadius: '25px',
    padding: '12px 24px',
    marginRight: '12px',
    color: 'rgba(255, 255, 255, 1)',
    border: '1px solid rgba(255, 255, 255, .3)'
  },
  selectedButton: {
    backgroundColor: '#457875',
    color: 'rgba(255, 255, 255, 1) !important',
    border: '1px solid rgba(255, 255, 255, .3)'
  }
})

const FilterStatus: FC = () => {
  const classes = useStyles();
  const { status } = InvoicesModule.Store;
  const lang = getLang().invoices;

  return (
    <Box className={classes.root}>
      {InvoiceStatuses.map((filterItem) => (
        <Button
          className={
            filterItem === status 
              ? `${classes.button} ${classes.selectedButton}` 
              : classes.button
          }
          key={filterItem}
          disabled={filterItem === status}
          onClick={() => {
            InvoicesModule.Store.lens().for('filters').for('status').set(filterItem);
          }}
        >
          {lang.status[filterItem]}
        </Button>
      ))}
    </Box>
  );
}

export default observer(FilterStatus);