import logo from './logo.svg';
import './App.css';
import AttackRow from './components/AttackRow'
import AttackPlanner from './components/AttackPlanner';
import { Attack } from './components/AttackContext';
import { Card,Box, Container, Grid2 as Grid, Slider, Button} from '@mui/material'
import { createContext, useContext,useState } from 'react';
import ProfileCard from './components/ProfileIcon';
import axios from 'axios';
import AttackInfo from './components/AttackInfo';
import AttackSelector from './components/AttackSelector';
import PrevAttack from './components/PrevAttack';

export const CurrentAttackContext = createContext(null)

function App() {
  const [Player1Attack, setPlayer1Attack] = useState(null)
  const [Player2Attack, setPlayer2Attack] = useState(null)
  const [PrevAttack1, setPrevAttack1] = useState(null)
  const [PrevAttack2, setPrevAttack2] = useState(null)
  const [adv, setAdv] = useState(0)
  const char1 = {
    name: "ed1",
    image:require("./static/images/ed.jpg"),
    attacks: [new Attack(require("./static/images/ed.jpg"),"2p",5,10,3,-2),
      new Attack(require("./static/images/ed.jpg"),"5p",4,10,3,-1),
      new Attack(require("./static/images/ed.jpg"),"5k",7,10,3,-2),
      new Attack(require("./static/images/ed.jpg"),"2k",8,10,3,-3),
      new Attack(require("./static/images/ed.jpg"),"2s",7,10,3,-5),
      new Attack(require("./static/images/ed.jpg"),"5s",10,10,3,4)
    ]
  }
  const char2 = {
      name: "ed",
      image: require("./static/images/ed.jpg"),
      attacks: [
        new Attack(require("./static/images/ed.jpg"),"2p",3,10,3,-2),
        new Attack(require("./static/images/ed.jpg"),"5p",2,10,3,-1),
        new Attack(require("./static/images/ed.jpg"),"5k",5,10,3,-2),
        new Attack(require("./static/images/ed.jpg"),"2k",5,10,3,-3),
        new Attack(require("./static/images/ed.jpg"),"2s",6,10,3,-5),
        new Attack(require("./static/images/ed.jpg"),"5s",12,10,3,4)
      ]
  }
  const chars =[char1, char2]

  const [player1, setPlayer1] = useState(char1)
  const [player2, setPlayer2] = useState(char2)
  const [test, setTest] = useState("hit")

  const testCall = () =>{
    axios.get('http://localhost:8000/test').then((res)=>{
      setTest(res.data)
      console.log(res.data)
    })
  }

  const handleAdvChange = (event, newValue) => {
    setAdv(newValue);
  };

  const handleSwap = (event) =>{
    let tempChar = player1
    let tempAttack = Player1Attack
    setPlayer1(player2)
    setPlayer1Attack(Player2Attack)
    setPlayer2(tempChar)
    setPlayer2Attack(tempAttack) 
  }

  const handleNext = (event) =>{
    setAdv(Attack.compare(Player1Attack, Player2Attack, 0).adv)
    setPrevAttack1(Player1Attack)
    setPlayer1Attack(null)
    setPrevAttack2(Player2Attack)
    setPlayer2Attack(null)
  }

  const handleClear = (event) => {
    setAdv(0)
    setPrevAttack1(null)
    setPlayer1Attack(null)
    setPrevAttack2(null)
    setPlayer2Attack(null)
  }

  const handleClearPrev = (event) =>{
    setAdv(0)
    setPrevAttack1(null)
    setPrevAttack2(null)
  }

  const handleClearCurr = (event) =>{
    setPlayer1Attack(null)
    setPlayer2Attack(null)
  }
  const prevAttackInfo = (PrevAttack1 == null && PrevAttack2 == null) ? null : (
    <PrevAttack attack1={PrevAttack1} attack2={PrevAttack2} adv={0} />
  )
  return (
    <div className="App">
      <CurrentAttackContext.Provider value={{
        player1AttackContext:[Player1Attack,setPlayer1Attack],
        player2AttackContext:[Player2Attack,setPlayer2Attack],
        player1Context: [player1, setPlayer1],
        player2Context:[player2, setPlayer2],
        advContext:[adv,setAdv]
        }}>
        <Box bgcolor={"blue"} height={"100vh"} width={"100vw"}>
          <Grid container spacing={2} height={'100%'} width={'100%'} overflow={'hidden'}>

              {/* prev attack */}
              <Grid size={12}>
                
              </Grid>

              {/* enemy character */}
              <Grid size={1}>
                <ProfileCard characters={chars} name={player2.name} player={2}/>
              </Grid>

              {/* enemy attack */}
              <Grid size={2}>
                <AttackSelector attacks={player2.attacks}/>
              </Grid>


              {/* enemy attack info */}
              <Grid size = {9} >
                <Card sx={{m:2}} width={'100%'}>
                  <AttackInfo attack={Player2Attack}/>
                </Card>

              </Grid>

  

              {/* player info */}
              <Grid size = {1} >
                <ProfileCard characters={chars} name={player1.name} player={1}/>
              </Grid>

              <Grid size = {2}  container flexDirection={'column'} flexWrap={'nowrap'}>
                <PrevAttack attack1={PrevAttack1} attack2={PrevAttack2} adv={0} sx={{ height:'40%'}} onClick={handleClearPrev}/>
                <PrevAttack attack1={Player1Attack} attack2={Player2Attack} adv={adv} sx={{ height:'40%'}} onClick={handleClearCurr}/>
                <Box sx={{mt:2}}display={'flex'} width={'100%'} flexDirection={'row'} justifyContent={'space-evenly'}>
                  <Button variant={'contained'} onClick={handleNext}> next </Button>
                  <Button variant={'contained'} onClick={handleClear}> clear </Button>
                </Box>
              </Grid>

              {/* player attack info */}
              <Grid size = {9} display={'flex'} height={'60%'}>
                <AttackPlanner attackData={player1.attacks} player={1} adv={adv}/>
              </Grid>


            </Grid>
        </Box>
      </CurrentAttackContext.Provider>
    </div>
  );
}

export default App;
