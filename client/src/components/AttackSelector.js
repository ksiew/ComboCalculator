import { Box, Card, CardContent, CardMedia , Modal, Grid2 as Grid, Tooltip} from "@mui/material";
import { useState, useContext } from "react";
import { CurrentAttackContext } from "../App";

function AttackCard(props){
    const {player2AttackContext} = useContext(CurrentAttackContext)
    const [Player2Attack, setPlayer2ttack] = player2AttackContext


    const handleClick = () =>{
        setPlayer2ttack(props.attack)
        props.setOpen(false)
    }
    const cardStyle = {
        display: 'inline-grid', 
        alignContent:'center', 
        m:2,
        textAlign: 'center'
    }

    return (
        <Grid onClick={handleClick} height={300} sx={cardStyle}>
                <Box component={'img'} src={props.attack.image}/>
                {props.attack.input}
        </Grid>
    )
}


function AttackSelector(props){
    const [open, setOpen] = useState(false)
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}
    const handleChange = (char) => props.handleChange(char)

    const modalStyle = {
        position: 'fixed',
        height: '80%',
        top: '10%',
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

    let attackCards =[]
    props.attacks.forEach((attack)=>{
        attackCards.push(
                <AttackCard attack={attack} setOpen={setOpen}/>
    )
    })

    return(
        <Box sx={{m:2}}>
        <Card onClick ={handleOpen}>
            <CardMedia sx={{ height: 100, backgroundSize:'contain'}} image={require("../static/images/ed.jpg")}/>
            <CardContent>
                Swap
            </CardContent>
        </Card>
        <Modal open={open} onClose={handleClose}  sx={modalStyle}>
            <Grid  container sx={{overflowY:'scroll'}} height={'100%'}>
                {attackCards}
            </Grid>
        </Modal>
        </Box>
    )
}

export default AttackSelector