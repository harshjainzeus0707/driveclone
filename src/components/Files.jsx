import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  IconButton,
  Grid,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

function Files({ files }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        {" "}
        {files.length} files{" "}
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "0.5rem" }}>
        {files.map((item, index) => {
          let imagesource;
          let backgroundcolor;
          let fileType;
          if (item.type == 1) {
            imagesource = "/assets/File-ppt.svg";
            backgroundcolor = "#FFF9EB";
            fileType = "PPT";
          } else if (item.type == 3) {
            imagesource = "/assets/File-pdf.svg";
            backgroundcolor = "#FFF5F7";
            fileType = "PDF";
          } else {
            imagesource = "/assets/File-text.svg";
            backgroundcolor = "#F5F5FF";
            fileType = "DOC";
          }
          return (
            <Grid item key={index} md={6} lg={3}>
              <Card sx={{ maxWidth: 250 }} elevation={1}>
                <Box
                  style={{
                    padding: "5rem",
                    paddingBottom: "3rem",
                    paddingTop: "3rem",
                    borderBottom: "1px solid #eaeaea ",
                    background: `${backgroundcolor}`,
                  }}
                >
                  <CardMedia component="img" image={imagesource} alt="folder" />
                </Box>
                <CardContent style={{ padding: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ marginLeft: "1rem" }}>
                      <Typography variant="caption" color="textSecondary">
                        {fileType}
                      </Typography>
                      <Typography variant="body1">{item.name}</Typography>
                    </div>
                    <IconButton aria-label="settings" onClick={handleClick}>
                      <img src="assets/DotsVerticalO.svg" />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                          "&.": {},
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem>
                        <ListItemIcon>
                          <img
                            src="assets/DotsVerticalO.svg"
                            alt="rename folder"
                          />
                        </ListItemIcon>
                        Rename File
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <img
                            src="assets/DotsVerticalO.svg"
                            alt="Duplicate Folder"
                          />
                        </ListItemIcon>
                        Duplicate File
                      </MenuItem>

                      <MenuItem sx={{ color: "red" }}>
                        <ListItemIcon>
                          <img
                            src="assets/DotsVerticalO.svg"
                            alt="Delete Folder"
                          />
                        </ListItemIcon>
                        Delete File
                      </MenuItem>
                    </Menu>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Files;
