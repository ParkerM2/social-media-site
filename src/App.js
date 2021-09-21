import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import RegistrationPage from './Pages/RegistrationPage';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './Pages/SignIn';

const font =  "'Quicksand'";
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
  },
  typography: {
    fontFamily: font,
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            
            <Route path="/register">
              <RegistrationPage />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
