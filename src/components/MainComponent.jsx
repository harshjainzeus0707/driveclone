import { Button, Container, Typography } from '@mui/material';
import React,{useEffect,useState} from 'react';
import {initalItem} from "../Data/data";
import Files from './Files';
import Folder from './Folder';
import NavBar from './NavBar';
import Search from './Search';
import ModalComp from './ModalComp';

function MainComponent() {
  const [Item, setItem] = useState(initalItem);
  const [open, setOpen] = React.useState(false);
  const [type,settype] = useState("");
  const [value,setValue] = useState("");
  // for folder type = 1, file = 0
  const [current, setCurrent] = useState({
    type: 0,
    name: "My Documents",
    ID: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  const [bc, setBc] = useState([
    {
      type: 0,
      name: "My Documents",
      ID: 0,
      parent: -1
    }
  ]);

  const files = Item.filter((item) => {
    let value = true;
    if (item.type === 0) value = false;
    if (item.parent !== current.ID) value = false;
    if (searchValue !== "" && !item.name.toLowerCase().startsWith(searchValue))
      value = false;
    return value;
  });

  const folder = Item.filter((item) => {
    let value = true;
    if (item.type !== 0) value = false;
    if (item.parent !== current.ID) value = false;
    if (searchValue !== "" && !item.name.toLowerCase().startsWith(searchValue))
      value = false;
    return value;
  });

  const handleFolderClick = (item) => {
    setBc([...bc, item]);
    setCurrent(item);
  };
  const handleBack = () => {
    bc.pop();
    setBc([...bc]);
    setCurrent(bc.at(-1));
  };

  const handleBcClick = (item) => {
    while (bc.at(-1).ID !== item.ID) bc.pop();
    setBc([...bc]);
    setCurrent(bc.at(-1));
  };
  const handleSearch = (text) => {
    setSearchValue(text.toLowerCase());
  };

  const handleChange = (e) =>{
     setValue(e.target.value)
  }
  const getType = (text) => {
    if (text.split(".").length === 1) return 2;
    if (text.split(".")[1].toLowerCase() === "ppt") return 1;
    if (text.split(".")[1].toLowerCase() === "doc") return 2;
    if (text.split(".")[1].toLowerCase() === "pdf") return 3;
  };

  const add = () => {
    setItem([
      ...Item,
      {
        name: searchValue,
        type: 0,
        parent: current.ID,
        ID: Item.length + 1
      }
    ]);
    setSearchValue("");
  }
  const addObj = (type) => {
    // change searchValue Variable
    let localtype = "";
    if(type == "folder") {localtype = 0 ;}
    else {localtype = getType(value);}
    setItem([
      ...Item,
      {
        name: value,
        type: localtype,
        parent: current.ID,
        ID: Item.length + 1
      }
    ]);
    setSearchValue("");
  };

  const deleteItem = (ID) => {
    setItem(Item.filter((item) => item.ID !== ID));
  };
  const duplicate = (item) => {
    setItem([
      ...Item,
      {
        type: item.type,
        parent: item.parent,
        name: `${item.name}(1)`,
        ID: Item.length + 1
      }
    ]);
  };
  const rename = (value, text) => {
    const newvalue = Item.map((item) =>
      item.ID === value.ID ? { ...item, name: text } : item
    );
    setItem(newvalue);
  };

  const handleOpen = (type) => {
    settype(type);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <div style={{background:"#f0f0f0",paddingBottom:"3rem"}}>
      
      <NavBar breadCrums={bc} handleBack={handleBack} handleBcClick={handleBcClick}/>
      <Container style={{marginBottom:"1rem"}}>

          <div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem", marginBottom:"2rem"}}>

            <div style={{flexGrow:"11"}}>
              <Typography variant="h5" style={{fontWeight:"bold"}} > {bc[bc.length-1].name} </Typography>
              <div style={{marginTop:"0.5rem"}}><Typography variant="body1" color="textSecondary"> {folder.length} folder, {files.length} files</Typography></div>
            </div>
            <div style={{verticalAlign:"center",marginTop:"1em"}}>
              <Button variant="outlined"  onClick={() => handleOpen("folder")} style={{marginRight:"1rem",borderColor:"black",color:"black",padding:"0.5rem" }}><Typography variant="body2">New folder</Typography></Button>
              <Button variant="contained" onClick={() => handleOpen("file")} style={{backgroundColor:"#008392"}}>New file</Button>
            </div>

          </div>


          <Search handleSearch={handleSearch} searchValue={searchValue}/>

          <Folder handleFolderClick={handleFolderClick} folder={folder}/>

          <Files files={files} />
          <ModalComp open={open} handleClose={handleClose} type={type} handleChange ={handleChange} value ={value} addObj={addObj}/>
      </Container>
    </div>
  );
}

export default MainComponent;
