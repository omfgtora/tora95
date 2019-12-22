import React from 'react';
import './Reset.css'
import './App.scss';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Draggable from 'react-draggable'
import Clock from './components/Clock'
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
  Button,
  WindowHeader,
  WindowContent
} from 'react95'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>

        <Draggable positionOffset={{ x: '35vw', y: '25vh' }}>
          <Window style={{ width: 400 }}>
            <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Welcome to ToRA95</span>
              <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
                <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
              </Button>
            </WindowHeader>

            <WindowContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
              <img alt='Doge.png' title='Such Amaze.' src={ Doge } draggable={ false } />
              <div style={{ padding: '1rem 0' }}>Wow. Such retro.</div>
              <Hourglass style={{ display: 'block' }} />
            </WindowContent>

          </Window>
        </Draggable>

        <AppBar style={{ bottom: 0, top: 'unset' }}>
          <Toolbar>

            <Menu />
            <Divider style={{ margin: '0 5px'}} vertical={ true } />

            <span style={{ flexGrow: 1 }}></span>

            <Divider style={{ margin: '0 5px'}} vertical={ true } />
            <Clock style={{ fontWeight: 600, padding: '0 8px', fontFamily: 'Roboto Mono, monospace' }} />

          </Toolbar>
        </AppBar>

      </ThemeProvider>
    </div>
  );
}

export default App;
