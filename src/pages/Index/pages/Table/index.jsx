import Page from "pages/Page"
import PropTypes from "prop-types"
import Router from "router"

import useStyles from "./styles"

const Table = ({ routes = [], ...rest }) => {
  const classes = useStyles()

  return (
    <Page>
      <div>Table</div>
      <Router routes={routes} {...rest} />
    </Page>
  )
}

export default Table

Table.propTypes = {
  routes: PropTypes.any,
}
