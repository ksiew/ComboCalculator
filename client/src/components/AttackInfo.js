import {ArrowBack, ArrowForward} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid , TableContainer, Table, TableRow, TableCell, TableBody, TableHead} from '@mui/material';
import { Attack } from './AttackContext';


function AttackInfo(props){
    const attack = props.attack
    
    const InfoStyle = {
        position: 'fixed',
        fontSize: 20,
        color: 'white',
        alignText: 'center'
    }

    return (
        <TableContainer sx={{height: '100%'}}>

        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell> Attack</TableCell>
              <TableCell> Startup </TableCell>
              <TableCell> Damage </TableCell>
              <TableCell> On Hit </TableCell>
              <TableCell> On Block </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableCell/>
            <TableCell> {attack?.input}</TableCell>
            <TableCell> {attack?.startup} </TableCell>
            <TableCell> {attack?.damage} </TableCell>
            <TableCell> {attack?.onHit} </TableCell>
            <TableCell> {attack?.onBlock} </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default AttackInfo