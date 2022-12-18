import { grey, green } from '@material-ui/core/colors';
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { useState } from "react";


const dashboard = () => {
    
    return ( 
        <div>
            
        <Box textAlign="left" p={2} mb={2} style={{backgroundColor: grey[500],
  color: "white"}}>
    <Typography variant="h5">Final Project</Typography> <a  style={{color: 'white', textDecoration: 'none', marginLeft: '45%'}} href="/">Dashboard</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a style={{color: 'white', textDecoration: 'none'}} href="/musics">Musics</a>
   </Box>
            <div className="content" >
                <img style={{width: '1250px', height: '470px'}} src={'images/image.jpg'} alt="" />
            </div>
        </div>
     );
}
 
export default dashboard;