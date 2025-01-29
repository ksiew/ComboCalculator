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
        height: '100%'
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
        <Modal open={open} onClose={handleClose}  sx={modalStyle}>
            <Table sx={tableStyle}>
                <TableHead sx={{justifyContent: 'center'}}>
                    <TableCell>Characters</TableCell>
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