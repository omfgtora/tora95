import React from 'react'
import { List, ListItem, Button} from 'react95'

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    document.addEventListener('click', handleClose )
  }

  const handleClose = () => {
    setOpen(false);
    document.removeEventListener('click', handleClose)
  }

  return (
    <>
    {open && (
        <List style={{ position: 'absolute', bottom: 38, left: 4 }}>
          <ListItem onClick={ handleClose }>Encrypt Message</ListItem>
          <ListItem onClick={ handleClose }>Profile</ListItem>
        </List>
      )}
    <div>
      <Button onClick={ handleClick } active={ open } style={{ fontWeight: 600 }}>Start</Button>
    </div>
    </>
  )
}