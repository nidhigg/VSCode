import React from "react";
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

class SongsList extends React.Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = { 
      details : {
        playlistId : '1'
      },
      result : {
        urls : []
      } 
    };
  }

  //override componentDidMount function
  componentDidUpdate() {
    
  }

  onSubmitButtonClick = ()=>{
    fetch('http://localhost:8080/api/v1/playlist/'+this.state.details.playlistId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          urls : data
        })
      });
  }

  //Override render function
  render() {
      const {count} = this.state;

      return (
        <Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='playlist No.' placeholder='1' defaultValue='1' value={this.state.details.playlistId} aria-readonly='false' />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={()=>this.onSubmitButtonClick()} variant='contained' sx={{ marginRight: 3.5 }}>
              Fetch Songs
            </Button>
          </Grid>
        <Card>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableHead>
              <TableRow>
                <TableCell>URLs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.result.urls.map(url => (
                <TableRow hover key={url} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      </Grid>
      )
  }
}

export default SongsList