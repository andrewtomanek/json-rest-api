import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
interface ModalProps {
  language: string;
  changeLanguage: (languageString: string) => void;
}

const Wrap = styled(Card)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0.1rem;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: var(--blue);
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "10%",
    backgroundColor: "var(--blue)"
    "@media (max-width: 780px)": {
      width: "20%",
    },
  },
  selectWrap: {
    margin: theme.spacing(1),
    width: "100%",
    textAlign: "center",
    color: "hsla(210, 100%, 30%, 1)",
    fontSize: "1rem",
    padding: "0.1rem"
  }
}));

const LanguageSwitch: React.FunctionComponent<ModalProps> = ({
  language,
  changeLanguage
}) => {
  const classes = useStyles();
  const updateLanguage = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <StylesProvider injectFirst>
      <Wrap>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Language</InputLabel>
          <NativeSelect
            className={classes.selectWrap}
            value={language}
            onChange={updateLanguage}
            inputProps={{
              name: "age",
              id: "age-native-label-placeholder"
            }}
          >
            <option value="cs-CZ">Česky</option>
            <option value="en-US">English</option>
            <option value="ru-RU">Pусский</option>
          </NativeSelect>
        </FormControl>
      </Wrap>
    </StylesProvider>
  );
};

export default LanguageSwitch;
