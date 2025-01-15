import { Box, Card, CardContent, CardMedia , Modal, Table, TableRow, TableCell, TableHead, TableBody} from "@mui/material";
import { useState } from "react";
import CharacterCard from "./CharacterCard";

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
        position: 'absolute',
        height: '50%',
        width: '70%',
        top: '25%',
        left: '15%',
        bgcolor: 'grey',
    }

    let characterCards =[]
    props.characters.forEach((char)=>{
        characterCards.push(
                <CharacterCard character={char} player={props.player} setOpen={setOpen}/>
    )
    })

    return(
        <div>
        <Card onClick ={handleOpen}>
            <CardMedia sx={{ height: 140 }} image={require("../static/images/ed.jpg")}/>
            <CardContent>
                Swap Character
            </CardContent>
        </Card>
        <Modal open={open} onClose={handleClose}>
            <Table sx={modalStyle}>
                <TableHead>
                    <TableCell sx={{textAlign:'center'}}>Characters</TableCell>
                </TableHead>
                <TableBody>
                {characterCards}
                </TableBody>
            </Table>
        </Modal>
        </div>
    )
}

export default ProfileCard