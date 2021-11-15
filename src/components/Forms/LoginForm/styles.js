import { makeStyles } from "@material-ui/core/styles"

import ronephoto from "../../../assets/ronephoto.png"

const styles = makeStyles((theme) => ({
  p: {
    color: "#bf1650",
  },
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "	hsl(223, 28%, 14%)",
    background:
      "linear-gradient(45deg,  #FF8E12 90%,rgba(254, 107, 255, .5) 30%,)",

    padding: theme.spacing(0.7),
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    boxShadow: "0px 0px 40px #323232",
    backgroundColor: "	hsl(223, 28%, 14%)",
    background:
      "linear-gradient(45deg, rgba(254, 107, 255, .3) 30%, #FF8E12 90%)",
    borderRadius: "10px",

    padding: theme.spacing(3),
  },
  welcome: {
    textAlign: "center",
    fontSize: "5rem !important",
    fontWeight: "bold",
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(3, 0, 1, 0),
    textShadow: "2px 2px 2px #000000",
  },

  loginHeader: {
    width: "100%",
    margin: "0 auto",
    fontSize: "2rem !important",
    textAlign: "center",
    padding: "1rem 0",
    color: theme.palette.secondary.contrastText,
  },

  inputContainer: {
    backgroundImage: `url(${ronephoto})`,
    backgroundSize: "cover",
    backgroundPosition: "fill",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minWidth: "340px",
    justifyContent: "center",
    border: ".5px solid #000000",
    borderRadius: "1.1rem",
    margin: "auto ",
    boxShadow: "0px 0px 10px #0022ff",
  },
  feildContainer: {
    margin: "0 auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "fit",
    backgroundRepeat: "no-repeat",
    // height: "calc(100% - 800px)",
    width: "330px",
    justifyContent: "center",
    padding: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
  },

  formHelperText: {
    position: "relative",
    marginLeft: 0,
    content: "⚠ ",
    color: theme.palette.colors.error,
  },
  passwordHelperText: {
    position: "relative",

    marginLeft: 0,
    content: "⚠ ",
    color: theme.palette.colors.error,
  },

  loginButton: {
    transition: "all .3s ease-in-out",
    padding: "25px !important",
    marginTop: "10px",
    height: "35px",
    margin: theme.spacing(8, 0, 0, 0),
    backgroundColor: "#ff7aa8 !important",
    color: "white !important",
    textShadow: ".5px .5px .5px #000000",
    width: theme.spacing(12),
    fontSize: "1.2rem !important",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "#ec5990 !important",
      color: "white !important",
    },
  },

  noAccount: {
    justifyContent: "center",
    // fontSize: "1.2rem",
    lineHeight: "1.66",
    display: "flex",
    width: "100%",
    marginBottom: theme.spacing(6),
    padding: theme.spacing(1),
    alignContent: "flex-end",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      cursor: "pointer",
    },
  },

  buttonRoot: {
    fontWeight: 500,
    textTransform: "uppercase",
    // fontSize: "1.2rem",
    minHeight: 45,
  },

  orContainer: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3, 0),
    backgroundImage: `linear-gradient(to right, ${theme.palette.divider} 30%, ${theme.palette.divider} 0%)`,
    backgroundPosition: "center",
    backgroundSize: "10px 1px",
    backgroundRepeat: "repeat-x",
    "& p": {
      display: "inline-block",
      padding: theme.spacing(0, 1),
      width: "auto",
      fontSize: "1rem",
      fontFamily: ["Roboto Mono", "monospace"].join(","),
      textAlign: "center",
      backgroundColor: "#fff",
    },
  },
}))

export default styles
