import { Button } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router"
const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const history = useHistory()
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        <MenuItem onClick={navToProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
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
