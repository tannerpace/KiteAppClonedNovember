import LocationComponentParent from "components/App/LocationComponentParent"
import Page from "pages/Page"
import PropTypes from "prop-types"
import Router from "router"

import useStyles from "./styles"

const Location = ({ routes = [], ...rest }) => {
  const classes = useStyles()

  return (
    <Page>
      {/* <LocationComponentParent /> */}
      <h1>LocationPage</h1>
      <Router routes={routes} {...rest} />
    </Page>
  )
}

export default Location

Location.propTypes = {
  routes: PropTypes.any,
}
