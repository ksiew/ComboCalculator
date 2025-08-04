import { Box, Card, CardContent, CardMedia , Modal, Button, Grid2 as Grid} from "@mui/material";
import { useState, useContext } from "react";
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

function CharacterSelectModal(){
    const [open, setOpen] = useState(false)
    const handleClose = () => {setOpen(false)}

    return(
    <Modal>

    </Modal>)
}


function ProfileCard(props){
    const [open, setOpen] = useState(false)
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}
    const handleChange = (char) => props.handleChange(char)

    const modalStyle = {
        position: 'fixed',
        height: '50%',
        top: '25%',
        left: '15%',
        right: '15%',
        bgcolor: 'grey',
        border: '3'
    }

    const tableStyle = {
        position: 'relative',
        border: '3',
        height: '100%',
        justifyContent:'flexStart'
    }

    console.log(props.character)
    let characterCards =[]
    props.characters.forEach((char)=>{
        characterCards.push(
                <CharacterCard character={char} player={props.player} setOpen={setOpen}/>
    )
    })

    return(
        <Box sx={{m:2}}>
        <Card onClick ={handleOpen}>
            <CardMedia sx={{ height: 100, backgroundSize:'contain'}} image={require("../static/images/ed.jpg")}/>
            <CardContent>
                Player {props.player}
            </CardContent>
        </Card>
        <Modal open={open} onClose={handleClose}  sx={modalStyle}>
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={tableStyle}>
                {characterCards}
            </Grid>
        </Modal>
        </Box>
    )
}

export default ProfileCard