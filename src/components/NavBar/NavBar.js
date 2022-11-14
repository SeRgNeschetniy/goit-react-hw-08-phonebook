import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

export default function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h3" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          PhoneBook
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>

        {isLoggedIn ? <UserMenu /> : ''}
      </Toolbar>
    </AppBar>
  );
}
