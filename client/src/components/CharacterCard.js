import { useContext } from "react";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { CurrentAttackContext } from "../App";


function CharacterCard(props){
    const {player1Context, player2Context} = useContext(CurrentAttackContext)
    const [player1, setPlayer1] = player1Context
    const [player2, setPlayer2] = player2Context

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    const handleClick = () =>{
        if(props.player == 1){
            setPlayer1(props.character)
        }else{
            setPlayer2(props.character)
        }
        props.setOpen(false)
    }
    return (
        <Grid size = {3} onClick={handleClick} sx={cardStyle} >
            <Box fullwidth component={'img'} src={props.character.image}/>
            <Button variant={'contained'}>
                {props.character.name} 
            </Button>
        </Grid>
    )
}

export default CharacterCard