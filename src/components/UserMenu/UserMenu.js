import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Welcome, {user.name}
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        sx={{ my: 1, mx: 1.5 }}
      >
        Log Out
      </Button>
    </>
  );
}
