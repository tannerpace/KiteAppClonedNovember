import Snackbar from "components/Snackbar"
import { AppContainer } from "contexts/App"
import ForgotPasswordDialog from "dialogs/ForgotPassword"
import { withRouter } from "react-router"
import Router, { routeConfig } from "router"

import Header from "./Header"
import useStyles from "./styles"

const App = () => {
  const { classes } = useStyles()

  return (
    <AppContainer>
      <Header />
      <Router routes={routeConfig} />
      <div id="dialog-holder">
        {/* LEAVE THIS IN PLACE FOR DIALOGS TO POPULATE INTO */}
        <ForgotPasswordDialog />
      </div>
      <Snackbar />
    </AppContainer>
  )
}

export default withRouter(App)
