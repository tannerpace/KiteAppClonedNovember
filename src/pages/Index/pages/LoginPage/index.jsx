import LoginForm from "components/Forms/LoginForm"
import Page from "pages/Page"
import PropTypes from "prop-types"
import Router from "router"

import useStyles from "./styles"

const LoginPage = ({ routes = [], ...rest }) => {
  const classes = useStyles()

  return (
    <Page>
      <h1>src/pages/Index/pages/LoginPage/index.jsx</h1>
      <LoginForm />
      <Router routes={routes} {...rest} />
    </Page>
  )
}

export default LoginPage

LoginPage.propTypes = {
  routes: PropTypes.any,
}
