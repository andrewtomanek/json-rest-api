import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LanguageSwitch from "./LanguageSwitch";
import { history } from "../store/configureStore";
import { langData } from "../context/languageData";
import { LangContext, LangDispatchContext } from "../context/LangContext";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridAutoFlow: "column",
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
  const dispatchValue: (languageString: string) => void =
    React.useContext(LangDispatchContext);
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
      <LanguageSwitch changeLanguage={dispatchValue} language={contextValue} />
      <BottomNavigationAction
        className={classes.navText}
        label={langData[contextValue].createRoute}
        value="/create"
      />
    </BottomNavigation>
  );
}
