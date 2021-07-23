import { useState } from 'react';

import { Container } from "@material-ui/core";

import NameList from "./components/NameList";
import NewNameForm from "./components/NewNameForm";
import RussianRoulette from './components/RussianRoulette';

function App() {
  const [victims, setVictims] = useState(['Pasha', 'Vlad', 'Misha']);
  const addVictim = name => setVictims(prev => [...prev, name]);

  return (
    <Container>
      <NameList names={victims} />
      <NewNameForm addVictim={addVictim} />
      <RussianRoulette victims={victims}/>
    </Container>
  );
}

export default App;
