import {TableRow, TableCell, Box } from "@mui/material";
import { CurrentAttackContext } from "../App";
import { useContext, useState } from "react";
function AttackRow(props){
    const {player1AttackContext, player2AttackContext, playerContext, advContext} = useContext(CurrentAttackContext)
    const [currentAttack, setCurrentAttack] = (props.player == 1) ? player1AttackContext : player2AttackContext
    const [adv, setAdv] = advContext


    const imageStyle={
      maxHeight: '20px',

    }
    let color = {
      slow: "red",
      even: "grey",
      fast: "green",
      self: "white"
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
      <TableRow hover bgcolor={color[props.status]} onClick={()=> 
        {if(currentAttack !== props.data){
          setCurrentAttack(props.data)
        }else{
          setCurrentAttack(null)
        }}
      }>
        <TableCell> 
          <Box component={"img"} src={props.data.image} sx={imageStyle}/>

        </TableCell>
        <TableCell> {props.data.input}</TableCell>
        <TableCell> {props.data.startup}</TableCell>
        <TableCell> {props.data.damage}</TableCell>
        <TableCell onClick={handleOnHit}> {props.data.onHit}</TableCell>
        <TableCell onClick={handleOnBlock}> {props.data.onBlock}</TableCell>
      </TableRow>)
}

export default AttackRow;