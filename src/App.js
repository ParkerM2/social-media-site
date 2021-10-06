import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import RegistrationPage from './Pages/RegistrationPage';
import Account from './Pages/Account';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './services/PrivateRoute/PrivateRoute';

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
        <AuthProvider>
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
  
              <PrivateRoute path="/home">
                <Home />
              </PrivateRoute>
              
              <PrivateRoute path="/account">
                <Account />
              </PrivateRoute>
      
              <Route exact path="/profile/:id">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
      
    </div>
  );
};

export default App;
