import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

import "./home.scss";
import { Check } from "./sections/Check";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Check />
    </div>
  );
};
