import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#6effff',
      main: '#00e5ff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
