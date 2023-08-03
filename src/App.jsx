import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AboutCompay } from "./components/AboutCompany/AboutCompay";
import { Task } from "./components/Task/Task";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <AboutCompay />
      <Task />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
