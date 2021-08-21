import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ChracterContainer from "./components/ChracterContainer";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <ChracterContainer characters={characters} reqApi={reqApi} />
      )}
    </Container>
  );
}

export default App;
