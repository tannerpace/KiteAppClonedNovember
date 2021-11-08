import { createTheme } from "@material-ui/core/styles"

const primary = {}
const secondary = {}
const error = {}

const spacing = (factor) => factor * 8

export default createTheme({
  spacing,
  palette: {},
  typography: {},
  overrides: {
    MuiDialog: {
      paper: {
        width: "100%",
        // height: '50%'
      },
    },
  },
})
