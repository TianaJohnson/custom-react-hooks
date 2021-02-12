import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import Toggle from './components/Toggle';
import Inc from './components/Inc';
import Mount from './components/Mount';
import Hover from './components/Hover';
import Local from './components/Local';
import Cookies from './components/Cookie';
import Script from './components/Script';
import { PageWrapper } from './state';
import Nav from './components/Nav';
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
// import purp from "./purp.png";
// import black from "./black.png";
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
        <Script/>
        <Toggle/>
        <br/>
        <Inc/>
        <br/>
        <Mount/>
        <br/>
        <Cookies/>
        <Local/>
        <Hover/>
        <CardGrid>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="..."/>
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="..."/>
          </Card>
        </CardGrid>
      </Container>
    </div>
    </PageWrapper>
  );
}

export default App;
