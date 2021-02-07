import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import Toggle from './components/Toggle';
import Inc from './components/Inc';
import Mount from './components/Mount';
import Hover from './components/Hover';
import PageWrapper from './components/PageWrapper';
import Nav from './components/Nav';
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  return (
    <PageWrapper>
    <div>
      <Header>       
        <Menu />
        <h1>Header</h1>
      </Header>
      <Nav/>
      <Container>
        <h2>Super Cool</h2>
        <Toggle/>
        <br/>
        <Inc/>
        <br/>
        <Mount/>
        <br/>
        <Hover/>
        <CardGrid>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </div>
    </PageWrapper>
  );
}

export default App;
