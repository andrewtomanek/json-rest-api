import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { getNotes } from "../store/actions/notes";
import { LangContext } from "../context/LangContext";
import { langData } from "../context/languageData";
import ListComponent from "../components/ListComponent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import styled from "styled-components";
interface DispatchProps {
  getNotes: () => void;
}

const Wrapper = styled(Card)`
  width: 100%;
`;

const useStyles = makeStyles(() => ({
  headerText: {
    width: "100%",
    textAlign: "center",
    color: "hsla(210, 90%, 30%, 1)",
    fontSize: "1.7rem",
    fontWeight: 700,
  },
}));

const Home = (props: DispatchProps) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();

  React.useEffect(() => {
    props.getNotes();
  }, []);

  return (
    <StylesProvider injectFirst>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography
            className={classes.headerText}
            variant="h2"
            component="h2"
            gutterBottom
          >
            {langData[contextValue].header}{" "}
          </Typography>
        </Box>
        <Wrapper>
          <ListComponent />
        </Wrapper>
      </Container>
    </StylesProvider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNotes: () => dispatch(getNotes()),
});

export default connect<DispatchProps>(null, mapDispatchToProps)(Home);
