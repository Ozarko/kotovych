import { TextLine } from "../../../components/TextLine";
import { useTranslation } from "../../../context/useTranslation";
import "./about.scss";

export const About = () => {
  const {schema: {about}} = useTranslation()

  return (
    <section className="about" id="about">
      <p className="about-description">{about.description}</p>
      <TextLine />
    </section>
  );
};
