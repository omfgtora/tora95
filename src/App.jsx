import React from 'react';
import './App.scss';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Draggable from 'react-draggable'
import Clock from 'clock-react'
import Menu from './components/Menu'
import Doge from './assets/images/doge.png'
import { 
  reset,
  themes,
  AppBar,
  Toolbar,
  Divider,
  Hourglass,
  Window,
  WindowHeader,
  WindowContent
} from 'react95'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const HourglassStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '45vh'
}

function App() {

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
      <Draggable positionOffset={{ x: '35vw', y: '25vh' }}>
        <Window style={{ width: 400 }}>
          <WindowHeader>Welcome to ToRA95</WindowHeader>
          <Toolbar></Toolbar>
          <WindowContent style={{ display: 'flex', justifyContent: 'center', flexDirecion: 'column', flexWrap: 'wrap' }}>
            <img alt='Such Amaze' src={ Doge } draggable={ false } />
            <div style={{ padding: '1rem 0'}}>Wow. Such retro.</div>
          </WindowContent>
        </Window>
      </Draggable>
      <div style={ HourglassStyles }><Hourglass /></div>
      <AppBar style={{bottom: 0, top: 'unset'}}>
        <Toolbar>
          <Menu />
          <Divider style={{ margin: '0 5px'}} vertical={ true } />
          <span style={{ flexGrow: 1 }}></span>
          <Divider style={{ margin: '0 5px'}} vertical={ true } />
          <Clock style={{ fontWeight: 600 }} />
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default App;
