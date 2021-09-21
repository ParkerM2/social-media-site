import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Divider,
} from '@mui/material';

export default function Footer() {
    return (
        <>
        <Divider />
        <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Parker Manning
              </Typography>
            </Toolbar> 
        </AppBar>
        </>
    )
};