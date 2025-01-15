import {ArrowBack} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid } from '@mui/material';

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


    return (
        <Grid container>
            <Grid size={2}>

            </Grid>
            {/* player 1 box */}
            <Grid size={3}>
                <Box bgcolor={'grey'}>
                    {props.attack1?.attack}
                </Box>
            </Grid>
            <Grid size={2}>
                {/* {arrow} */}
            </Grid>

            {/* player 2 box */}
            <Grid size={3}>
                <Box bgcolor={'grey'}>
                    {props.attack2?.attack}
                </Box>
            </Grid>
            <Grid size={2}>

            </Grid>
        </Grid>
    )
}

export default AttackInfo