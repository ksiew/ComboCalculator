import { Box, TableContainer, Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Tab, Tabs, Button  } from "@mui/material";
import { Attack } from "./AttackContext";
import useDrag from 'react-dnd';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { useState } from "react";

function AttackRow(props){
    const {player1AttackContext, player2AttackContext, playerContext, advContext} = useContext(CurrentAttackContext)
    const [currentAttack, setCurrentAttack] = (props.player == 1) ? player1AttackContext : player2AttackContext


    const imageStyle={
      height:'100%'

    }
    const rowStyle={

    }

    const currentStyle={
      fontSize: 20
    }
    let color = {
      slow: "red",
      even: "grey",
      fast: "green",
      self: "white",
      current: 'yellow'
    }
    return (
      <TableRow sx={(props.status=="current")? currentStyle : rowStyle} hover bgcolor={color[props.status]} onClick={()=> 
        {if(props.status != "current" && currentAttack !== props.data){
          setCurrentAttack(props.data)
        }else{
          setCurrentAttack(null)
        }}
      }>
 
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.input}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.startup}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.damage}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.onHit}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.onBlock}</TableCell>
      </TableRow>)
}

function AttackTable(props) {
    const {player1AttackContext, player2AttackContext, playerContext, advContext} = useContext(CurrentAttackContext)
    const [enemyAttack, setEnemyAttack] = (props.player == 2) ? player1AttackContext : player2AttackContext
    const [currentAttack, setCurrentAttack] =  player1AttackContext
    const [currentTab, setCurrentTab] = useState("all")
    const adv = props.adv

    let fastAttacks = []
    let slowAttacks = []
    let evenAttacks = []
    let currentAttacks = []
    let selectedAttack = []

    // for(let i = 0; i < props.attackData.length; i ++){
    //   evenAttacks.push(<AttackRow data = {props.attackData[i]} status={"self"} player={props.player}/>)
    
    // }

    for(let i = 0; i < props.attackData.length; i ++){
      let status = "even"
      if(currentAttack != null && props.attackData[i].input ==  currentAttack.input){
        selectedAttack.push(<AttackRow data = {props.attackData[i]} status={"current"} player={props.player}/>)
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

    function handleFastTab(){
      setCurrentTab("fast")
    }

    function handleSlowTab(){
      setCurrentTab("slow")
    }

    function handleAllTab(){
      setCurrentTab("all")
    }

    if(enemyAttack == null){
      currentAttacks = evenAttacks
    }
    else if(currentTab == "fast"){
      currentAttacks = fastAttacks
    }
    else if(currentTab == "slow"){
      currentAttacks = slowAttacks
    } 
    else if (currentTab == "even"){
      currentAttacks = evenAttacks
    }
    else{
      currentAttacks= [...fastAttacks, ...evenAttacks, ...slowAttacks]
    }
    return (
      <TableContainer sx={{width:'100%', height: '100%', m:2}}>
        <Box>
          <Button onClick={handleFastTab}>Winning</Button>
          <Button onClick={handleSlowTab}>Losing</Button>
          <Button onClick={handleAllTab}>All</Button>
        </Box>
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
            {selectedAttack}
            {currentAttacks}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

export default AttackTable