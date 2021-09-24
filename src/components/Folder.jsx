import React, { useState } from "react";
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
import RenameModal from "./RenameModal";

function Folder({ folder, handleFolderClick, duplicate, deleteItem, rename,isActive }) {
  // for delete crete delete rename drop doen

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [mopen, setMopen] = useState(false);
  const [name, setName] = useState("");
  const [currentItem, setCurrentItem] = useState({});

  const openRanameModal = (item) => {
    setCurrentItem(item);
    setMopen(true);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        {" "}
        {folder.length} folders{" "}
      </Typography>
      {!isActive && <Grid container spacing={3} style={{ marginTop: "0.5rem" }}>
        { folder.map((item, index) => (
          <Grid item key={index} sm={12} md={6} lg={3}>
            {<Card sx={{ maxWidth: 250 }} elevation={1}>
              <Box
                style={{
                  padding: "5rem",
                  paddingBottom: "3rem",
                  paddingTop: "3rem",
                  borderBottom: "1px solid #eaeaea ",
                }}
                onClick={() => handleFolderClick(item)}
              >
                <CardMedia
                  component="img"
                  image="/assets/foldercopy.png"
                  alt="folder"
                />
              </Box>
              <CardContent style={{ padding: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginLeft: "1rem" }}>{item.name}</span>
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
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={() => openRanameModal(item)}>
                      <ListItemIcon>
                        <img
                          src="assets/DotsVerticalO.svg"
                          alt="rename folder"
                        />
                      </ListItemIcon>
                      Rename Folder
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        console.log("called..");
                        duplicate(item);
                      }}
                    >
                      <ListItemIcon>
                        <img
                          src="assets/DotsVerticalO.svg"
                          alt="Duplicate Folder"
                        />
                      </ListItemIcon>
                      Duplicate Folder
                    </MenuItem>

                    <MenuItem
                      style={{ color: "red" }}
                      onClick={() => deleteItem(item.ID)}
                    >
                      <ListItemIcon>
                        <img
                          src="assets/DotsVerticalO.svg"
                          alt="Delete Folder"
                        />
                      </ListItemIcon>
                      Delete Folder
                    </MenuItem>
                  </Menu>
                </div>
              </CardContent>
            </Card>}
          </Grid>
        ))}
        </Grid>}
        
      {isActive && <div>
         {
           folder.map((item,index) => (
             <>
             <div style={{display:"flex" ,justifyContent:"space-between", alignItems:"center",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}>
               <div style={{display:"flex", alignItems:"center"}}>
                  <img src="/assets/foldercopy.png" style={{width:"3rem"}}/>
                  <span style={{ marginLeft: "1rem"}}>{item.name}</span>
                  </div>
               <div> <IconButton aria-label="settings" onClick={handleClick}>
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
                      Rename Folder
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <img
                          src="assets/DotsVerticalO.svg"
                          alt="Duplicate Folder"
                        />
                      </ListItemIcon>
                      Duplicate Folder
                    </MenuItem>

                    <MenuItem style={{ color: "red" }}>
                      <ListItemIcon>
                        <img
                          src="assets/DotsVerticalO.svg"
                          alt="Delete Folder"
                        />
                      </ListItemIcon>
                      Delete Folder
                    </MenuItem>
                  </Menu>
                
                  </div>

               </div>
               <div style={{border:"1px solid lightgrey"}}> </div>
              </>
              
           ))
         }
       
       </div>

      }
   
      {mopen && (
        <RenameModal
          open={mopen}
          handleClose={setMopen}
          type="folder"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          addObj={() => rename(currentItem, name)}
        />
      )}
    </div>
  );
}

export default Folder;
