import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
interface ModalProps {
  language: string;
  changeLanguage: (languageString: string) => void;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "space-evenly",
    margin: theme.spacing(1),
    "@media (max-width: 780px)": {
      width: "25%",
    },
  },
  selectWrap: {
    margin: theme.spacing(1),
    textAlign: "center",
    color: "hsla(210, 100%, 30%, 1)",
    fontSize: "1rem",
    padding: "0.2rem",
  },
}));

const LanguageSwitch: React.FunctionComponent<ModalProps> = ({
  language,
  changeLanguage,
}) => {
  const classes = useStyles();
  const updateLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <StylesProvider injectFirst>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectWrap}
          value={language}
          onChange={updateLanguage}
          inputProps={{
            name: "age",
            id: "age-native-label-placeholder",
          }}
        >
          <option value="cs-CZ">Česky</option>
          <option value="en-US">English</option>
          <option value="ru-RU">Pусский</option>
        </NativeSelect>
      </FormControl>
    </StylesProvider>
  );
};

export default LanguageSwitch;
