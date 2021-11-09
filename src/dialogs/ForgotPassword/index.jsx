import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core"
import App from "contexts/App"
import { useContext } from "react"

import useStyles from "./styles"

const ForgotPasswordDialog = () => {
  const classes = useStyles()

  const { dialogs, closeDialog } = useContext(App)
  const thisDialog = dialogs?.["forgotPassword"] || {}
  const { open = false, data = {} } = thisDialog

  const handleClose = () => {
    closeDialog("forgotPassword")
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>ForgotPassword Dialog</DialogTitle>
      <DialogContent>
        <Typography>ForgotPassword Dialog</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose} type="button">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ForgotPasswordDialog
