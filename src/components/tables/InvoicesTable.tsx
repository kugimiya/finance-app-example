import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import format from 'date-fns/format';
import { Invoice } from '@models/Invoice';
import getLang from '../../langvars/getLang';
import { InvoiceStatus } from '../../enums/InvoiseStatus';
import { Currency } from '../../enums/Currency';

type InvoiceRecord = {
  number: string;
  ownerName: string;
  supplierName: string;
  status: InvoiceStatus;
  currency: Currency;
  programName: string;
  fundRequest: string;
  fundResponse: string;
  createdDate: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRoot: {
    background: 'linear-gradient(-30deg, rgb(94 105 134 / 40%), rgb(114 128 162 / 40%))',
    boxShadow: '0px 0px 20px 10px rgba(0,0,0,0.2)',
  },
  tableHead: {
    background: 'linear-gradient(-30deg, rgb(120 132 162 / 40%), rgb(144 157 187 / 40%))'
  },
  resetBorder: {
    border: '0',
    color: 'white'
  }
});

function createData(invoice: Invoice): InvoiceRecord {
  return {
    number: invoice.number,
    ownerName: invoice.owner.name,
    supplierName: `${invoice.supplier.firstName} ${invoice.supplier.lastName}`,
    status: invoice.status,
    currency: invoice.currency,
    programName: invoice.program.name,
    fundRequest: invoice.fundingRequest.toString(),
    fundResponse: invoice.fundingResponse.toString(),
    createdDate: format(invoice.createdDate, 'mm/dd/yyyy HH:MM'),
  };
}

interface InvoicesTableProps {
  invoices: Invoice[];
}

const InvoicesTable: FC<InvoicesTableProps> = ({ invoices }) => {
  const classes = useStyles();
  const lang = getLang().invoices;

  return (
    <TableContainer component={Paper} className={classes.tableRoot}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableHead}>
            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.number}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.ownerName}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.supplierName}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.status}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.currency}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.programName}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.fundRequest}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.fundResponse}
            </TableCell>

            <TableCell className={classes.resetBorder}>
              {lang.tableColumnNames.createdDate}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map(createData).map((invoice) => (
            <TableRow key={invoice.number}>
              <TableCell className={classes.resetBorder}>
                {invoice.number}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.ownerName}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.supplierName}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {lang.status[invoice.status]}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {lang.currency[invoice.currency]}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.programName}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.fundRequest}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.fundResponse}
              </TableCell>

              <TableCell className={classes.resetBorder}>
                {invoice.createdDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(InvoicesTable);
