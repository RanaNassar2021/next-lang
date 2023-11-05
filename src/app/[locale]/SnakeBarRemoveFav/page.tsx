'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface State extends SnackbarOrigin {
    openTop: boolean;
  }

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<State>({
    openTop: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openTop } = state;


  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, openTop: true });
    setOpen(true)
  };


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setState({ ...state, openTop: false });
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick({vertical: 'top', horizontal: 'right' })}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}  key={vertical + horizontal}   anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        product added succussfully to Cart 
        </Alert>
      </Snackbar>
      <Alert severity="error">Product removed successfully from Favourites</Alert>
    
    </Stack>
  );
}
