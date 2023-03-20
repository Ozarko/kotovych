import React, { FC } from "react";
import { useRef } from "react";
import { WithChildren } from "../../types/general";
import "./background.scss";

export const Background: FC<WithChildren> = ({ children }) => {
  
  const blobRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: any) => {
    if (window.innerWidth > 768) {
      blobRef.current?.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div className="blob" ref={blobRef} />
      <div className="bg" />
      {children}
    </div>
  );
};
