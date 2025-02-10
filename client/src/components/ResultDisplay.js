import {ArrowBack, ArrowForward, Height, Margin} from '@mui/icons-material';
import { useContext } from "react";
import { CurrentAttackContext } from "../App";
import { Box, Icon, Grid2 as Grid, Card } from '@mui/material';
import { Attack } from './AttackContext';

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
        m:2
    }

    return (
        <Box height={'20%'} container textAlign={'start'}>
            <Card container sx={style}>
                {props.result.text}
                <br/>
                {(props.result.winner == 2) ? "" : "+"}
                {props.result.adv}
            </Card>
        </Box>
    )
}

export default ResultDisplay