import {ArrowBack, ArrowForward, Height, Margin, Straighten, Timer, DoDisturb} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid, Card, Tooltip } from '@mui/material';

function AttackBox(props){      
    const style = {
        minHeight: '40px',
        fontSize: '24px',
        alignContent: 'center',
        m:2
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

function ResultDisplay(props){

    const style = {
        fontSize: 20,
        backgroundColor: props.result.color,
        alignContent: 'center',
        textAlign: 'center',
        height: '80%',
        m:2,
        padding: 1
    }

    const distance = ((true) ? 
        <Tooltip title="Attack may be out of range">
            <Straighten/>
        </Tooltip>
        : ""
    )

    const active = ((true) ? 
        <Tooltip title="Data may change based on when attack hits">
            <Timer/>
        </Tooltip>
        : ""
    )

    const cancel = ((true) ? 
        <Tooltip title="Attack may be cancelable">
            <DoDisturb/>
        </Tooltip>
        : ""
    )

    return (
        <Box height={'20%'} container textAlign={'start'}>
            <Card container sx={style} onClick={props.onClick}>
                {props.result.text}
                <br/>
                {(props.result.winner == 2) ? "" : "+"}
                {props.result.adv}
                <Box>
                    {distance}
                    {cancel}
                    {active}
                </Box>
            </Card>
        </Box>
    )
}

export default ResultDisplay