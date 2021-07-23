import { Container } from "@material-ui/core";

import NameList from "./components/NameList";

function App() {
  return (
    <Container>
      <NameList names={['Pasha', 'Vlad', 'Misha']} />
    </Container>
  );
}

export default App;
