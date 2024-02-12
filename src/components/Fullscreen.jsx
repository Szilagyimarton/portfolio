import { Dialog, DialogContent } from "@mui/material"


function Modal({image, handleFullscreen,open}) {
 
  return (
    <Dialog className="modalContainer" open={open} onClick={(event) => handleFullscreen(event)}>
      <DialogContent className="modal">
        
        <img src={image}/>
      </DialogContent>
    </Dialog>
  )
}

export default Modal