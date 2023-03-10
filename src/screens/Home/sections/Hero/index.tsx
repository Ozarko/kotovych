import { useEffect, useRef } from "react";
import "./hero.scss";
import london from "./London.mp4";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <section className="hero">
      <div className="hero-section">
        <h2 className="hero-header">English</h2>
        <h2 className="hero-header">is easy</h2>
      </div>
      <div className="hero-section">
        <div className="hero-section-video">
          <video
            className="hero-section"
            autoPlay
            loop
            muted
            ref={videoRef}
          >
            <source src={london} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
