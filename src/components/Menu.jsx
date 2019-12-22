import React from 'react'
import { List, ListItem , Button} from 'react95'

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
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
