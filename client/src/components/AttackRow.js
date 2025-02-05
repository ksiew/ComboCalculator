import {TableRow, TableCell, Box } from "@mui/material";
import { CurrentAttackContext } from "../App";
import { useContext, useState } from "react";
function AttackRow(props){
    const {player1AttackContext, player2AttackContext, playerContext, advContext} = useContext(CurrentAttackContext)
    const [currentAttack, setCurrentAttack] = (props.player == 1) ? player1AttackContext : player2AttackContext
    const [adv, setAdv] = advContext


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

    const handleOnHit = (ev) => {
      ev.stopPropagation()
      if(props.player == 1){
        setAdv(parseInt(props.data.onHit))
      }else{
        setAdv(-1 * parseInt(props.data.onHit))
      }
    }

    const handleOnBlock = (ev) => {
      ev.stopPropagation()
      if(props.player == 1){
        setAdv(parseInt(props.data.onBlock))
      }else{
        setAdv(-1 * parseInt(props.data.onBlock))
      }
    }
    return (
      <TableRow sx={(props.status=="current")? currentStyle : rowStyle} hover bgcolor={color[props.status]} onClick={()=> 
        {if(props.status != "current" && currentAttack !== props.data){
          setCurrentAttack(props.data)
        }else{
          setCurrentAttack(null)
        }}
      }>
        {/* <TableCell sx={{height:240}}> 
          <Box component={"img"} src={props.data.image} sx={imageStyle}/>

        </TableCell> */}
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.input}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.startup}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle}> {props.data.damage}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle} onClick={handleOnHit}> {props.data.onHit}</TableCell>
        <TableCell sx={(props.status=="current")? currentStyle : rowStyle} onClick={handleOnBlock}> {props.data.onBlock}</TableCell>
      </TableRow>)
}

export default AttackRow;