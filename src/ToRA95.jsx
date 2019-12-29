import React from 'react';
import './Reset.css'
import './ToRA95.scss';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Draggable from 'react-draggable'
import Menu from './components/Windows/System32/Menu'
import Clock from './components/Windows/System32/Clock'
import Draw from './components/ProgramFiles/Draw/Draw'
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
  WindowContent,
  Cutout
} from 'react95'

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const Apps = {
  'Draw': { name: 'Draw', description: 'Draw some stuff.' }
};

function ToRA95() {

  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={ themes.default }>

        <Draggable handle={ '#welcome-header' } positionOffset={{ x: '35vw', y: '25vh' }}>
          <Window style={{ width: 400 }}>

            <WindowHeader id={ 'welcome-header' } style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Welcome to ToRA95</span>
              <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={ 'sm' } square>
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

        <Draggable handle={ '#draw-header' } positionOffset={{ x: '35vw', y: '25vh' }}>
          <Window>

            <WindowHeader id={ 'draw-header' } style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Draw</span>
              <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={ 'sm' } square>
                <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
              </Button>
            </WindowHeader>

            <WindowContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
              <Draw />
            </WindowContent>

          </Window>
        </Draggable>

        <AppBar style={{ bottom: 0, top: 'unset' }}>
          <Toolbar>

            <Menu />
            <Divider style={{ margin: '0 5px'}} vertical={ true } />

            <span style={{ flexGrow: 1 }}>{ /* intentionally left blank */ }</span>

            <Cutout shadow={ false } style={{ padding: '8px 2px 6px'}}>
              <Clock style={{ fontWeight: 600, padding: '0 8px', fontFamily: 'Roboto Mono, monospace' }} />
            </Cutout>

          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default ToRA95;
