import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar() {
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
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
