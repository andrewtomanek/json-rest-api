import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { postNotes } from "../store/actions/notes";
import { LangContext } from "../context/LangContext";
import { langData } from "../context/languageData";
import Input from "../components/Input";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { NoteObject } from "../store/reducers/types";
import styled from "styled-components";

interface DispatchProps {
  postNotes: (note: NoteObject) => any;
}

const Wrapper = styled(Card)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: none;
  background: none;
`;

const useStyles = makeStyles(() => ({
  headerText: {
    textAlign: "center",
    color: "hsla(210, 90%, 30%, 1)",
    fontSize: "1.5rem",
    fontWeight: 700,
    marginTop: "2rem",
  },
}));

const NoteCreation = (props: DispatchProps) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();

  const createNote = (newNote: NoteObject) => {
    props.postNotes(newNote);
  };

  return (
    <StylesProvider injectFirst>
      <Box my={4}>
        <Typography
          className={classes.headerText}
          variant="h2"
          component="h2"
          gutterBottom
        >
          {langData[contextValue].createHeader}
        </Typography>
      </Box>
      <Wrapper>
        <Input createNote={createNote} />
      </Wrapper>
    </StylesProvider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postNotes: (note: NoteObject) => dispatch(postNotes(note)),
});

export default connect<DispatchProps>(null, mapDispatchToProps)(NoteCreation);
