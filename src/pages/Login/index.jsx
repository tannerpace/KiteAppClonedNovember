import { Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import LoginForm from "components/Forms/LoginForm"
import Page from "pages/Page"

import styles from "./styles"
import useStyles from "./styles"

const Index = () => {
  const classes = useStyles()

  return (
    <Page>
      <LoginForm />
    </Page>
  )
}

export default withStyles(styles)(Index)
