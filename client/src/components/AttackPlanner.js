import { TableContainer, Table, TableHead, TableBody, TableFooter, TableRow, TableCell } from "@mui/material";
import AttackRow from "./AttackRow";
import { Attack } from "./AttackContext";
import useDrag from 'react-dnd';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";

function AttackPlanner(props) {
    const {player1AttackContext, player2AttackContext, playerContext, advContext} = useContext(CurrentAttackContext)
    const [enemyAttack, setEnemyAttack] = (props.player == 2) ? player1AttackContext : player2AttackContext
    const [currentAttack, setCurrentAttack] =  player1AttackContext
    const adv = props.adv
    let fastAttacks = []
    let slowAttacks = []
    let evenAttacks = []
    let currentAttacks = []

    // for(let i = 0; i < props.attackData.length; i ++){
    //   evenAttacks.push(<AttackRow data = {props.attackData[i]} status={"self"} player={props.player}/>)
    
    // }

    for(let i = 0; i < props.attackData.length; i ++){
      let status = "even"
      if(currentAttack != null && props.attackData[i].input ==  currentAttack.input){
        currentAttacks.push(<AttackRow data = {props.attackData[i]} status={"current"} player={props.player}/>)
      }else if(enemyAttack !== null){
        if(props.attackData[i].startup - adv < enemyAttack.startup){
          fastAttacks.push(<AttackRow data = {props.attackData[i]} status={"fast"} player={props.player}/>)
        }else if(enemyAttack !== null && props.attackData[i].startup == enemyAttack.startup){
          evenAttacks.push(<AttackRow data = {props.attackData[i]} status={"even"} player={props.player}/>)
        }else{
          slowAttacks.push(<AttackRow data = {props.attackData[i]} status={"slow"} player={props.player}/>)
        }
      }else{
        evenAttacks.push(<AttackRow data = {props.attackData[i]} status={"self"} player={props.player}/>)
      }
    }
    return (
      <TableContainer sx={{width:'100%', height: '100%', m:2}}>

        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell> Attack</TableCell>
              <TableCell> Startup </TableCell>
              <TableCell> Damage </TableCell>
              <TableCell> On Hit </TableCell>
              <TableCell> On Block </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentAttacks}
            {fastAttacks}
            {evenAttacks}
            {slowAttacks}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

export default AttackPlanner