import { TestContextProvider, useTests } from "../../context/useTests";
import { LevelCheck } from "../LevelCheck";
import { About } from "./About";
import { Check } from "./Check";
import { Contacts } from "./Contacts";
import { Hero } from "./Hero";
import "./main.scss";

const Main = () => {
  const { isModalOpen } = useTests();
  return (
    <TestContextProvider>
      <LevelCheck />
      <div className={`main ${isModalOpen ? "hidden" : ""}`}>
        <Hero />
        <About />
        <Check />
        <Contacts />
      </div>
    </TestContextProvider>
  );
};

export default Main;
