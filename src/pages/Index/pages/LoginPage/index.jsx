import LoginForm from "components/Forms/LoginForm"
import Page from "pages/Page"
import PropTypes from "prop-types"
import Router from "router"

import useStyles from "./styles"

const LoginPage = ({ routes = [], ...rest }) => {
  const classes = useStyles()

  return (
    <Page>
      <LoginForm />
      <Router routes={routes} {...rest} />
    </Page>
  )
}

export default LoginPage

LoginPage.propTypes = {
  routes: PropTypes.any,
}
