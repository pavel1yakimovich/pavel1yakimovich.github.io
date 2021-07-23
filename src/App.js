import { useState } from 'react';

import { Container } from "@material-ui/core";

import NameList from "./components/NameList";
import NewNameForm from "./components/NewNameForm";
import RussianRoulette from './components/RussianRoulette';

function App() {
  const [victims, setVictims] = useState([]);
  const addVictim = name => setVictims(prev => [...prev, name]);
  const mercy = index => setVictims((prev) => {
    const arr = [...prev];
    arr.splice(index, 1);
    return arr;
  }); 

  return (
    <Container>
      <NameList names={victims} mercy={mercy} />
      <NewNameForm addVictim={addVictim} />
      <RussianRoulette victims={victims} />
    </Container>
  );
}

export default App;
