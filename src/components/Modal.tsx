import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import { langData } from "../context/languageData";
import { LangContext } from "../context/LangContext";
interface ModalProps {
  noteId: number;
  pickNote: (noteId: number) => void;
}

const ModalWrap = styled(Card)`
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  padding: 0rem;
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "hsla(210, 90%, 90%, 1)",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "60%",
    height: "60%",
    padding: theme.spacing(2, 4, 3),
    "@media (max-width: 780px)": {
      width: "90%",
      height: "auto",
    },
  },
  inputButton: {
    fontWeight: 500,
    "& .MuiButton-label": {
      fontSize: "1rem",
      color: "hsla(210, 60%, 40%, 1)",
    },
  },
}));

const TransitionsModal: React.FunctionComponent<ModalProps> = ({
  pickNote,
  noteId,
  children,
}) => {
  const contextValue = React.useContext(LangContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    pickNote(noteId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalWrap>
      <Button
        className={classes.inputButton}
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleOpen}
      >
        {langData[contextValue].detailButton}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>{children}</div>
        </Fade>
      </Modal>
    </ModalWrap>
  );
};

export default TransitionsModal;
