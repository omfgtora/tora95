import React from 'react'
import { List, ListItem, Button} from 'react95'

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      document.addEventListener('click', handleClose )
    } else {
      handleClose();
    }
  }

  const handleClose = () => {
    setOpen(false);
    document.removeEventListener('click', handleClose)
  }

  return (
    <>
    {open && (
        <List style={{ position: 'absolute', bottom: 38, left: 4 }}>
          <ListItem onClick={ handleClose }>🌐 Browser</ListItem>
          <ListItem onClick={ handleClose }>🔐 Encrypt Message</ListItem>
          <ListItem onClick={ handleClose }>🎨 Draw</ListItem>
          <ListItem onClick={ handleClose }>🙋‍♂️ About Me</ListItem>
        </List>
      )}
    <div>
      <Button onClick={ handleClick } active={ open } style={{ fontWeight: 600 }}>💠 Start</Button>
    </div>
    </>
  )
}