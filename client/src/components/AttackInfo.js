import {ArrowBack} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid } from '@mui/material';

function AttackBox(props){      
    const style = {
        minHeight: '80px',
        fontSize: '24px',
        alignContent: 'center'
    }

    let color = "white"
    if(props.adv > 0){
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

    let arrow = ""
    if(attack1 == null){
        if(attack2 != null){
            arrow = "<-"
        }
    }else{
        if(attack2 == null || attack1.startup > attack2.startup){
            arrow = "->"
        }else if (attack2.startup == attack1.startup){
            arrow = "<->"
        }else{
            arrow = "<-"
        }
    }

    let adv = 0
    if(attack1 == null ){
        if(attack2 == null){
          adv = 0
        }else{
          adv= attack2.onHit
        }
    }else{
        if(attack2 == null){
          adv = attack1.onHit
        }else{
          adv = 0
        }
    }

    return (
        <Grid container>
            <Grid size={2}>

            </Grid>
            {/* player 1 box */}
            <Grid size={3}>
                <AttackBox attack={attack1} adv={adv}/>
            </Grid>
            <Grid size={2}>
                {/* {arrow} */}
            </Grid>

            {/* player 2 box */}
            <Grid size={3}>
                <Box bgcolor={'grey'}>
                <AttackBox attack={attack2} adv={(adv * -1)}/>
                </Box>
            </Grid>
            <Grid size={2}>

            </Grid>
        </Grid>
    )
}

export default AttackInfo