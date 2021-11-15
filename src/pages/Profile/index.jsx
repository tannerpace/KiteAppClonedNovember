import { Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import Profile from "components/App/Profile"
import Page from "pages/Page"

import styles from "./styles"
import useStyles from "./styles"

const Index = () => {
  const classes = useStyles()

  return (
    <Page>
      <Box
        height="100vh"
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Profile />
      </Box>
    </Page>
  )
}

export default withStyles(styles)(Index)
