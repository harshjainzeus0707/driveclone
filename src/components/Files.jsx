import React from 'react';
import {Card, CardMedia, Typography, CardContent, Box, IconButton, Grid} from "@mui/material";

function Files({files}) {
    
    return (
       
       
        <div style={{marginTop:"2rem"}}>
        <Typography variant="body1" style={{fontWeight:"bold"}}> {files.length} files </Typography>
        <Grid container spacing={3} style={{marginTop:"0.5rem"}}>
        {files.map((item, index) => {
          let imagesource ;
          let backgroundcolor;
          let fileType;
          if(item.type==1){ 
            imagesource = "/assets/File-ppt.svg";
            backgroundcolor = "#FFF9EB";
            fileType = "PPT";
          }
          else if (item.type==3) {
            imagesource = "/assets/File-pdf.svg"; 
            backgroundcolor = "#FFF5F7";
            fileType = "PDF";
          }
          else  {
            imagesource = "/assets/File-text.svg";
            backgroundcolor = "#F5F5FF";
            fileType = "DOC";
          }
          return(
          <Grid item key={index} md={6} lg={3} >
          <Card sx={{ maxWidth: 250 }} elevation={1}>
              <Box style={{padding:"5rem", paddingBottom:"3rem", paddingTop:"3rem", borderBottom:"1px solid #eaeaea ", background:`${backgroundcolor}`}} >
                  <CardMedia component="img" 
                             image={imagesource} 
                             alt="folder"/>
              </Box>
             <CardContent style={{padding:"10px"}}>
                <div style={{display:"flex" ,justifyContent:"space-between", alignItems:"center"}}>
                <div style={{marginLeft:"1rem"}}>
                  <Typography variant="caption" color="textSecondary">{fileType}</Typography>
                  <Typography variant="body1">{item.name}</Typography>
                </div>
                <IconButton aria-label="settings">
                  <img src="assets/DotsVerticalO.svg" />
                </IconButton>
                </div>
                
                
             </CardContent>
            

           
          </Card>
          </Grid>
        )})}
        </Grid>
      </div>
 
    )
}

export default Files
