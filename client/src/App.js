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
import ResultDisplay from './components/ResultDisplay';
import { useEffect } from 'react';

export const CurrentAttackContext = createContext(null)

function App() {
  const [Player1Attack, setPlayer1Attack] = useState(null)
  const [Player2Attack, setPlayer2Attack] = useState(null)
  const [PrevAttack1, setPrevAttack1] = useState(null)
  const [PrevAttack2, setPrevAttack2] = useState(null)
  const [PrevResult, setPrevResult] = useState(Attack.compare(null, null, 0))
  const [Result, setResult] = useState(Attack.compare(null, null, 0))
  const [chars, setChars] = useState([])
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


  // useEffect(() => {
  //   axios.get('http://localhost:8000/characters', {
  //     params: {
  //       game: "SF6"
  //     }
  //   }).then((res)=>{
  //     setChars(res.data)
  //   })
  // }, []);

  console.log(chars)
  
  useEffect(() => {
    setChars([char1, char2])
  }, []);

  const [player1, setPlayer1] = useState(char1)
  const [player2, setPlayer2] = useState(char2)
  const [test, setTest] = useState("hit")

  const handleSwap = (event) =>{
    let tempChar = player1
    let tempAttack = Player1Attack
    setPlayer1(player2)
    setPlayer1Attack(Player2Attack)
    setPlayer2(tempChar)
    setPlayer2Attack(tempAttack) 
  }

  const handleNext = (event) =>{
    setPrevResult(Attack.compare(Player1Attack, Player2Attack, PrevResult.adv))
    setResult(Attack.compare(null, null, 0))
    setPrevAttack1(Player1Attack)
    setPlayer1Attack(null)
    setPrevAttack2(Player2Attack)
    setPlayer2Attack(null)
  }

  const handleClear = (event) => {
    setPrevResult(Attack.compare(null, null, 0))
    setResult(Attack.compare(null, null, 0))
    setPrevAttack1(null)
    setPlayer1Attack(null)
    setPrevAttack2(null)
    setPlayer2Attack(null)
  }

  const handleClearPrev = (event) =>{
    setPrevResult(Attack.compare(null, null, 0))
    setPrevAttack1(null)
    setPrevAttack2(null)
  }

  const handleClearCurr = (event) =>{
    setResult(Attack.compare(null, null, 0))
    setPlayer1Attack(null)
    setPlayer2Attack(null)
  }

  const handleSetPlayer1Attack = (attack) =>{
    setPlayer1Attack(attack)
    setResult(Attack.compare(attack, Player2Attack, PrevResult.adv))
  }

  const handleSetPlayer2Attack = (attack) =>{
    setPlayer2Attack(attack)
    setResult(Attack.compare(Player1Attack, attack, PrevResult.adv))
  }
 
  return (
    <div className="App">
      <CurrentAttackContext.Provider value={{
        player1AttackContext:[Player1Attack,handleSetPlayer1Attack],
        player2AttackContext:[Player2Attack,handleSetPlayer2Attack],
        player1Context: [player1, setPlayer1],
        player2Context:[player2, setPlayer2],
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
                Prev
                <ResultDisplay result={PrevResult}  sx={{ height:'40%'}} onClick={handleClearPrev}/>
                Curr:
                <ResultDisplay result={Result} sx={{ height:'40%'}} onClick={handleClearCurr}/>
                <Box sx={{mt:2}}display={'flex'} width={'100%'} flexDirection={'row'} justifyContent={'space-evenly'}>
                  <Button variant={'contained'} onClick={handleNext}> next </Button>
                  <Button variant={'contained'} onClick={handleClear}> clear </Button>
                </Box>
              </Grid>

              {/* player attack info */}
              <Grid size = {9} display={'flex'} height={'60%'}>
                <AttackPlanner attackData={player1.attacks} player={1} adv={PrevResult.adv}/>
              </Grid>


            </Grid>
        </Box>
      </CurrentAttackContext.Provider>
    </div>
  );
}

export default App;
