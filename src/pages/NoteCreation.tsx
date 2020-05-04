import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { postNotes } from "../store/actions/notes";
import { LangContext } from "../context/LangContext";
import { langData } from "../context/languageData";
import Input from "../components/Input";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";

type NoteObject = { id: number; title: string };
interface DispatchProps {
  postNotes: (note: NoteObject) => any;
}

const Wrapper = styled(Card)`
  padding: 1rem;
  margin: auto;
  width: 100%;
`;

const useStyles = makeStyles(() => ({
  headerText: {
    width: "100%",
    textAlign: "center",
    color: "hsla(210, 90%, 30%, 1)"
  }
}));

const NoteCreation = (props: DispatchProps) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();

  const createNote = (newNote: NoteObject) => {
    props.postNotes(newNote);
  };

  return (
    <StylesProvider injectFirst>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography
            className={classes.headerText}
            variant="h4"
            component="h4"
            gutterBottom
          >
            {" "}
            {langData[contextValue].createHeader}
          </Typography>
        </Box>
        <Wrapper>
          <Box>
            <Input createNote={createNote} />
          </Box>
        </Wrapper>
      </Container>
    </StylesProvider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postNotes: (note: NoteObject) => dispatch(postNotes(note))
});

export default connect<DispatchProps>(null, mapDispatchToProps)(NoteCreation);
