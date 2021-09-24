import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@mui/material';
import React from 'react';


function NavBar({breadCrums,handleBack,handleBcClick}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
       <AppBar color="inherit" position="static">
           <Toolbar >
                <span style={{marginRight: "1em"}} onClick={() => handleBack()}>
                    <img src="assets/Back.svg" loading="lazy"/>
                </span>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                    sx={{ mr: 2 }}
                >
                   <img src="assets/toddlelogo.png" width="33px" height="auto"/>
                 </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {breadCrums.map((item, index) => (
                        <>
                            <span
                            onClick={() => handleBcClick(item)}
                            style={{ cursor: "pointer" }}
                            >
                            {item.name}
                            </span>
                            {index !== breadCrums.length - 1 && <span style={{marginLeft:"0.5em",marginRight:"0.5em"}}> <img src="assets/Path1.png" height={"20px"}/> </span>}
                        </>
                    ))}
                </Typography>
           </Toolbar>
       </AppBar>
    </Box>

    );
    
}

export default NavBar
