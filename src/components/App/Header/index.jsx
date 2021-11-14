import { MenuItem } from "@material-ui/core"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import AppContext from "contexts/App"
import * as React from "react"
import { useContext } from "react"
import { useHistory, useLocation } from "react-router-dom"

import PositionedMenu from "../PositionedMenu"

const Header = () => {
  const appContext = useContext(AppContext)
  const history = useHistory()
  const location = useLocation()

  const handleNavLogin = () => {
    if (location.pathname === "/login") {
      appContext.openSnackBar({ message: "You are at login page!" })
    } else {
      history.push("/login")
    }
  }

  const handleLogOut = () => {
    appContext.setAuthData({ token: "", account: {} })
    appContext.openSnackBar({
      message: "You have logged out successfully!",
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <PositionedMenu />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kite App
          </Typography>
          {appContext?.authUser ? (
            <Button color="inherit">{appContext?.authUser.userName}</Button>
          ) : (
            <Button onClick={handleNavLogin} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
