import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
 musicListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
 const classes = useStyles();
 const [music, setMusic] = useState([]);

 useEffect(() => {
  async function getAllMusic() {
   try {
    const music = await axios.get("http://localhost:3333/musics")
    // console.log(musics.data);
    setMusic(music.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllMusic();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/musics/${id}`);
  var newmusic = music.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setMusic(newmusic);
 }


 return (
  <>
   <TableContainer component={Paper}>
    
   <Box textAlign="center" p={2} className={classes.musicListColor} style={{ backgroundColor: "gray" }}>
    <Typography variant="h4">Music List</Typography>
   </Box>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Title</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artist</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Genre</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Published</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       music.map((music, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{music.title}</TableCell>
          <TableCell align="center">{music.artist}</TableCell>
          <TableCell align="center">{music.genre}</TableCell>
          <TableCell align="center">{music.published}</TableCell>
          <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/view/${music.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${music.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(music.id)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default List;






