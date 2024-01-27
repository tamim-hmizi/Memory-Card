import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore, bestScore]);

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <p>
        Current Score : {currentScore} | Best Score : {bestScore}
      </p>

      <Cards setCurrentScore={setCurrentScore} />
    </div>
  );
}

export default App;
