import React from 'react'
import Draggable from 'react-draggable'

export default function DesktopIcon(props) {
  return (
    <Draggable>
      <div style={ props.style }>
        <img src={ props.src } alt={ props.altText } />
      </div>
    </Draggable>
  )
}
