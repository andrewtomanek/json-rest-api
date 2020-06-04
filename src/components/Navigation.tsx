import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { history } from "../store/configureStore";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
    backgroundColor: "hsla(0, 90%, 75%, 1)",
    height: "10vh",
  },
  navText: {
    color: "white",
    fontWeight: 900,
    "& .MuiBottomNavigationAction-label": {
      fontSize: "1.2rem",
    },
  },
});

export default function Navigation() {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.navText}
        label={langData[contextValue].homeButton}
        value="/"
      />
      <BottomNavigationAction
        className={classes.navText}
        label={langData[contextValue].createRoute}
        value="/create"
      />
    </BottomNavigation>
  );
}
