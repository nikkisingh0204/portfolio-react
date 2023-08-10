import NavBar from "./components/NavBar";
import Home from './components/Home'
import About from "./components/About";
import Skills from "./components/Skills";
import Work   from './components/Work';
import Contacts from "./components/Contacts";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
}

export default App;
