import { Button } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import AppContext from "contexts/App"
import PropTypes from "prop-types"
import React from "react"
import { useContext } from "react"
import { useHistory } from "react-router"
const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const history = useHistory()
  const open = Boolean(anchorEl)
  const appContext = useContext(AppContext)

  const handleClick = (event) => {
    if (appContext.authUser) {
      if (anchorEl === null) {
        setAnchorEl(event.currentTarget)
      } else {
        setAnchorEl(null)
      }
    } else if (history.location.pathname !== "/login") {
      history.push("/login")
    } else {
      appContext.openSnackBar({ message: "Please login first" })
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    handleClose()
    appContext.handleLogOut()
  }

  const navToProfile = () => {
    console.log("navToProfile")
    history.push("/profile")
    handleClose()
  }

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        onClick={handleClick}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={navToProfile}>Update Profile</MenuItem>
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default PositionedMenu

PositionedMenu.propTypes = {
  authUser: PropTypes.object,
  setAuthData: PropTypes.func,
  openSnackBar: PropTypes.func,
}
