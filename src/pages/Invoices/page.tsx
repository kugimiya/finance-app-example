import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

import { Invoice } from '@models/Invoice';
import { DisplayMode } from '../../enums/DisplayMode';

import InvoicesTable from '../../components/tables/InvoicesTable';

import { InvoicesModule } from './index';
import FilterStatus from './components/FilterStatus';
import DisplayModeComponent from './components/DisplayModeComponent';
import SortComponent from './components/SortComponent';

// TODO: alias for enums, components, utils may be

const useStyles = makeStyles({
  pageRoot: {
    padding: '24px',
    display: 'grid',
    gridTemplate: `
      "filter filter" auto
      "mode sorting" auto
      "content content" auto
    `,
    gridTemplateColumns: '120px auto',
    alignItems: 'center',
  },

  filter: {
    gridArea: 'filter',
  },

  mode: {
    gridArea: 'mode',
  },

  sorting: {
    gridArea: 'sorting',
    padding: '32px 0'
  },

  content: {
    gridArea: 'content',
  },
});

const InvoicesPage: FC = () => {
  const classes = useStyles();
  const { Store, Service } = InvoicesModule;
  const {
    display, invoices,
  } = Store;

  useEffect(() => {
    Store.asyncCommit<Invoice[]>({
      promise: Service.getData(),
      commit: {
        path: 'invoices',
      },
    });
  }, [Service, Store]);

  return (
    <Box className={classes.pageRoot}>
      <Box className={classes.filter}>
        <FilterStatus />
      </Box>
      
      <Box className={classes.mode}>
        <DisplayModeComponent />
      </Box>

      <Box className={classes.sorting}>
        <SortComponent />
      </Box>

      <Box className={classes.content}>
        {display === DisplayMode.LIST ? (
          <InvoicesTable invoices={invoices} />
        ) : (
          <Box />
        )}
      </Box>
    </Box>
  );
};

export default observer(InvoicesPage);
