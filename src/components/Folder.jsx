import React from 'react';
import {Card, CardMedia, Typography, CardContent, Box, IconButton, Grid} from "@mui/material";
function Folder({folder,handleFolderClick}) {

    return (
        <div style={{marginTop:"2rem"}}>
        <Typography variant="body1" style={{fontWeight:"bold"}}> {folder.length} folders </Typography>
        <Grid container spacing={3} style={{marginTop:"0.5rem"}}>
        {folder.map((item, index) => (
          <Grid item key={index} md={6} lg={3} >
          <Card sx={{ maxWidth: 250 }} elevation={1}>
              <Box style={{padding:"5rem", paddingBottom:"3rem", paddingTop:"3rem", borderBottom:"1px solid #eaeaea "}} onClick={() => handleFolderClick(item)} >
                  <CardMedia component="img"   image="/assets/foldercopy.png" alt="folder"/>
              </Box>
             <CardContent style={{padding:"10px"}}>
                <div style={{display:"flex" ,justifyContent:"space-between", alignItems:"center"}}>
                <span style={{marginLeft:"1rem"}}>{item.name}</span>
                <IconButton aria-label="settings">
                  <img src="assets/DotsVerticalO.svg" />
                </IconButton>

                {/*  */}
                </div>
                
                
             </CardContent>
            

            
          </Card>
          </Grid>
        ))}
        </Grid>
      </div>
    )
}

export default Folder
