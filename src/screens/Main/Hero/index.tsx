import React, { useEffect, useRef } from "react";
import london from "./london.mp4";
import "./hero.scss";
import { useTranslation } from "../../../context/useTranslation";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const {
    schema: { hero },
  } = useTranslation();

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-section">
        <h2 className="hero-header">{hero.title}</h2>
        <h2 className="hero-header">{hero.subtitle}</h2>
      </div>
      <div className="hero-section">
        <div className="hero-section-video">
          <video className="hero-section" autoPlay loop muted ref={videoRef}>
            <source src={london} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
