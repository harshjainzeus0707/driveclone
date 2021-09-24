import React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RenameModal({ open, handleClose, type, value, handleChange, addObj }) {
  let label;
  if (type == "folder") {
    label = "Enter folder name";
  } else {
    label = "Enter file name & type";
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 400,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{ display: "flex", marginBottom: "1.5rem" }}>
              <Typography
                variant="h5"
                component="h2"
                style={{ flexGrow: "1", fontWeight: "bold" }}
              >
                Rename {type}
              </Typography>
              <IconButton>
                <img src="assets/CancelOutlined.svg" onClick={handleClose} />
              </IconButton>
            </div>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{ marginBottom: "0.6rem" }}
            >
              Name of the {type}
            </Typography>
            <TextField
              label={label}
              variant="outlined"
              sx={{ padding: "0px", margintop: "1rem", borderColor: "grey" }}
              fullWidth
              onChange={(e) => {
                handleChange(e);
              }}
              value={value}
            />
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => handleClose(false)}
                style={{
                  marginRight: "1rem",
                  borderColor: "black",
                  color: "black",
                  padding: "0.5rem",
                }}
              >
                <Typography variant="body2">Cancel</Typography>
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  addObj(type);
                  handleClose(false);
                }}
                style={{ backgroundColor: "#008392" }}
              >
                Rename {type}
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RenameModal;
