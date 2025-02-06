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

function PrevAttack(props){
    const attack1 = props.attack1
    const attack2 = props.attack2

    const result = Attack.compare(attack1, attack2, props.adv)
    console.log(result)
    const style = {
        fontSize: 20,
        backgroundColor: result.color,
        alignContent: 'center',
        textAlign: 'center',
        height: '80%',
        m:2
    }

    return (
        <Box height={'20%'} container textAlign={'start'}>
            prev
            <Card container sx={style}>
                {result.text}
                <br/>
                {(result.winner == 2) ? "" : "+"}
                {result.adv}
            </Card>
        </Box>
    )
}

export default PrevAttack