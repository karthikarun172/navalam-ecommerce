import React,{useRef,useState} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@mui/styles";


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles({
  Yesbutton: {
    width: "100px",
    backgroundColor: "#30412F",
    color: "#fefefe",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#30412F",
      color: "#fefefe",
    },
  },
  Dialog: {
    maxWidth: "lg",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  NoButton: {
    width: "100px",
    backgroundColor: "#6B7231",
    color: "#fefefe",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#6B7231",
      color: "#fefefe",
    },
  },
});

const LogOutModal = ({ openIt, closeIt }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };

  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <Dialog
        className={classes.Dialog}
        open={openIt}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        PaperProps={{sx:"30%",height:"50%"}}
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          LOGOUT
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Sure You Want to Logout ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              history.push("/login");
            }}
            className={classes.Yesbutton}
          >
            YES
          </Button>
          <Button className={classes.NoButton} onClick={closeIt}>
            NO
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogOutModal;