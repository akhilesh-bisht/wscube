import Header from "./components/header";
import { Hero } from "./components/hero";
import Expert from "./components/expert";
import { Service } from "./components/service";
import Container from "./components/container";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Expert></Expert>
      <Service />
      <Container></Container>
    </>
  );
}

export default App;
