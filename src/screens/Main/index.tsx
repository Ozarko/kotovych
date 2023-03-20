import React, { useState } from "react";
import { useScrollBlock } from "../../hooks/useScrollBlock";
import { LevelCheck } from "../LevelCheck";
import { About } from "./About";
import { Check } from "./Check";
import { Contacts } from "./Contacts";
import { Hero } from "./Hero";
import "./main.scss";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const handleModalStateChange = () => {
    if (isModalOpen) {
      allowScroll();
    } else {
      blockScroll();
    }

    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <LevelCheck
        isOpen={isModalOpen}
        handleOpenState={handleModalStateChange}
      />
      <div className={`main ${isModalOpen ? "hidden" : ""}`}>
        <Hero />
        <About />
        <Check handleModalStateChange={handleModalStateChange} />
        <Contacts />
      </div>
    </>
  );
};

export default Main;
