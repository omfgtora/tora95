import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Window, WindowHeader, WindowContent, Button } from 'react95'

export default class AppWindow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Draggable positionOffset={{ x: '35vw', y: '25vh' }}>
        <Window style={{ width: 400 }}>

          <WindowHeader style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{ this.props.title }</span>

            <Button style={{ marginRight: '-6px', marginTop: '1px' }} size={ 'sm' } square>
              <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
            </Button>
          </WindowHeader>

          <WindowContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column wrap' }}>
            { this.props.app }
          </WindowContent>

        </Window>
      </Draggable>
    )
  }
}
