// import './App.css'

// function App() {

//   return (
//     <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro odio natus reprehenderit necessitatibus fuga aliquid illum at eos ea doloribus?</h1>
//   )
// }

// export default App


import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

import { fetchData } from './api'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ToggleColorMode from './components/ToggleColorMode';
import Login from './components/Login';
import Users from './components/Users';

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <div className="App">
        <BrowserRouter>             
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />          
              <Routes>
                <Route path="/" exact element={<Testimonials/>}/>
                <Route path="/questions" element={<Hero/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/winners" element={<Pricing/>}/>    
                <Route path="/auth/signin" element={<Login theme={defaultTheme}/>}/> 
                <Route path="*" element={<Divider/>}/>
              </Routes>           
          <Footer/>                  
        </BrowserRouter>
      </div>
      <CssBaseline />            
    </ThemeProvider>
  );
}
