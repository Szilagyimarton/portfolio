import { Alert } from "@mui/material"


function AlertMessage({successfullySent,setSuccessfullySent}) {
  setTimeout(() => {
    setSuccessfullySent(false)
  },2000)
  return (
    <Alert sx={{width:300,position:"absolute", top:0,right:0}}severity={successfullySent === "sent" ? "success" : "error"}>
     {successfullySent === "sent" ? "Your message has successfully sent!" : "Something went wrong, please try again!"}
   </Alert>
  )
}

export default AlertMessage