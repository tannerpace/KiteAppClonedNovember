import { Button } from "@material-ui/core"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import PropTypes from "prop-types"
import React from "react"

const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    console.log("handleClick", event)
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget)
    } else {
      setAnchorEl(null)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="demo-positioned-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Dashboard
      </Button>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
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
