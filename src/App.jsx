import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Historia from "./Components/Historia/Historia";
import Card from './Components/Card/Card'
import ReactPlayer from "react-player";


const App = () => {
  let heroData = [
  
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus, setplayStatus] = useState(false);
   return (
     <div>
       <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <hero
        setplayStatus={setplayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Historia/>
    
      <div className="App">
      <div className="cards-container">
        <Card
          imageUrl="https://logowik.com/content/uploads/images/bart-simpson2997.logowik.com.webp"
          title="Título de la tarjeta 1"
          text="Texto de la tarjeta 1"
        />
        <Card
          imageUrl="https://ew.com/thmb/qH6e1QIMvbT-yPg6xn7eJ3hKEQI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/simp_homersingle08_f_hires2-2000-cf09d1b1345c4e66b57bced2bebbe492.jpg"
          title="Título de la tarjeta 2"
          text="Texto de la tarjeta 2"
        />
        {/* Puedes agregar más tarjetas aquí */}
      </div>
    </div>
    <div className="App">
      <h1>App de React con Reproductor de Video</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=Pq4HS4WUOTw" 
      controls
      playing  // Esta propiedad hace que el video comience automáticamente
      width="100%"
      height="360px"
      />
    </div>
      
      
      </div>

    
   )
 }
 
 export default App
 