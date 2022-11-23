import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <h1 className="text-primary">App Sinapsis</h1>
      </Container>
    </>
  );
}

export default App;
