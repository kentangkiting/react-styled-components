// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  &:hover {
    background-color: white;
  }
  background-color: ${(props) => (props.isLogin ? "palevioletred" : "grey")};
  padding: 16px;
  border-radius: 10px;
  margin: 2%;
`;

const HeaderPertama = styled.h1`
  font-size: 3em;
`;

const Container = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
`;

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderPertama>Halaman Utama</HeaderPertama>
        <Button isLogin>Button Login</Button>
        <Button>Logout</Button>
      </Container>
    </div>
  );
}

export default App;
