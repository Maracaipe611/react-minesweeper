import Board from "./Components/Board";
import { useState } from "react";

const App = () => {

  const [jogar, setJogar] = useState(false)

  return (
    <div className="App">
      {/* {!jogar ?
      <div style={{width: "300px", height: "300px", backgroundColor: "black", border: "2px solid red"}}>
        <button onClick={() => setJogar(true)} style={{margin: "15vh auto", display: "flex", justifyContent: "center", alignItems: "center", width: "80px", borderRadius: "15px", cursor: "pointer"}}>JOGAR</button>
      </div>
      : */}
      <Board />{/* } */}

    </div>
  );
}

export default App;
