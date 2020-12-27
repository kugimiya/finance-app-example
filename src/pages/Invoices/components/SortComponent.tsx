import { Box, Button, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { AscDesc } from '../../../enums/AscDesc';
import getLang from '../../../langvars/getLang';
import { InvoicesModule } from '..';
import { InvoiceSortKeys } from '../../../enums/InvoiceSortKey';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  nonactive: {
    color: '#8496c1 !important',
    fontWeight: 'bold',
  },
  active: {
    color: '#f6fafa !important',
    fontWeight: 'bold',
  }
})

const SortComponent: FC = () => {
  const classes = useStyles();
  const { sortBy, sortDirection } = InvoicesModule.Store;
  const lang = getLang().invoices;

  return (
    <Box className={classes.root}>
        {InvoiceSortKeys.map((sortKey) => (
          <Button
            className={
              sortKey === sortBy
                ? classes.active
                : classes.nonactive
            }
            key={sortKey}
            onClick={() => {
              if (sortKey === sortBy) {
                InvoicesModule.Store.lens()
                  .for('filters')
                  .for('sortDirection')
                  .set(
                    sortDirection === AscDesc.ASC ? AscDesc.DESC : AscDesc.ASC,
                  );
              } else {
                InvoicesModule.Store.lens().for('filters').for('sortBy').set(sortKey);
                InvoicesModule.Store.lens()
                  .for('filters')
                  .for('sortDirection')
                  .set(AscDesc.ASC);
              }
            }}
          >
            {lang.sortKey[sortKey]}
            {/* eslint-disable-next-line no-nested-ternary */}
            {sortKey === sortBy ? (
              sortDirection === AscDesc.ASC ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )
            ) : (
              ''
            )}
          </Button>
        ))}
      </Box>
  );
}

export default observer(SortComponent);