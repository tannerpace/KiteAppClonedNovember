import PropTypes from "prop-types"

import useStyles from "./styles"

const Login = ({ children }) => {
  const classes = useStyles()

  return <div>Login</div>
}

Login.propTypes = {
  children: PropTypes.node,
}

export default Login
