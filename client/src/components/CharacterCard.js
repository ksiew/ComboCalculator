import { useContext } from "react";
import { TableRow, TableCell } from "@mui/material";
import { CurrentAttackContext } from "../App";


function CharacterCard(props){
    const {player1Context, player2Context} = useContext(CurrentAttackContext)
    const [player1, setPlayer1] = player1Context
    const [player2, setPlayer2] = player2Context


    const handleClick = () =>{
        if(props.player == 1){
            setPlayer1(props.character)
        }else{
            setPlayer2(props.character)
        }
        props.setOpen(false)
    }
    return (
        <TableRow onClick={handleClick} sx={{alignContent:'center'}}>
            <TableCell> {props.player} </TableCell>
            <TableCell> {props.character[0].startup} </TableCell>
        </TableRow>
    )
}

export default CharacterCard