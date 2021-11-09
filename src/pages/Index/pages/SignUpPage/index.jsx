import SignUpForm from "components/Forms/SignUpForm"
import Page from "pages/Page"
import PropTypes from "prop-types"
import Router from "router"

import useStyles from "./styles"

const SignUpPage = ({ routes = [], ...rest }) => {
  const classes = useStyles()

  return (
    <Page>
      <SignUpForm />
      <Router routes={routes} {...rest} />
    </Page>
  )
}

export default SignUpPage

SignUpPage.propTypes = {
  routes: PropTypes.any,
}
