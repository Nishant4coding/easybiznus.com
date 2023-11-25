import  React, {useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PopupAlert({ open, handleClose, title, type }) {

  useEffect(() => {
    setTimeout(() => handleClose(), 2000);
  }, [])

  return (
    <Stack spacing={2} sx={{ width: '100%',}}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%', }}>
          {title}
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}
