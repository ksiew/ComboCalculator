import {ArrowBack, ArrowForward} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid } from '@mui/material';
import { Attack } from './AttackContext';

function AttackBox(props){      
    const style = {
        minHeight: '80px',
        fontSize: '24px',
        alignContent: 'center'
    }

    let color = "gray"
    if(props.adv == null){
        color = "white"
    } else if(props.adv > 0){
        color = "green"
    }else if(props.adv < 0){
        color = "red"
    }
    return(
        <Box border={2} bgcolor={color} sx={style}>
            {props.attack?.input}
        </Box>
    )
}

function AttackInfo(props){
    const attack1 = props.attack1
    const attack2 = props.attack2
    
    const InfoStyle = {
        position: 'fixed',
        fontSize: 20,
        color: 'white',
        alignText: 'center'
    }

    const adv = Attack.compare(attack1, attack2)
    let arrow = ""
    if (adv == 0){
        arrow = (<Box>
            <ArrowBack/>
            <ArrowForward/>
        </Box>)
    }else if(adv > 0){
        arrow = (<ArrowForward/>)
    }else{
        arrow = (<ArrowBack/>)
    }

    return (
        <Grid container>
            <Grid size={2}>

            </Grid>
            {/* player 1 box */}
            <Grid size={3}>
                <AttackBox attack={attack1} adv={adv}/>
            </Grid>
            <Grid size={2} sx={{justifyContent:'flex-start', alignContent:'center'}}>
                {arrow}
            </Grid>

            {/* player 2 box */}
            <Grid size={3}>
                <AttackBox attack={attack2} adv={(adv != null) ? (adv * -1) : null}/>
            </Grid>
            <Grid size={2}>

            </Grid>
        </Grid>
    )
}

export default AttackInfo