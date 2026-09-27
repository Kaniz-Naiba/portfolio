import React, { useEffect, useState } from "react";

const OpeningCurtain = () => {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start opening animation after the page loads
    const startTimer = setTimeout(() => {
      setOpening(true);
    }, 800);

    // Completely remove the curtain after animation
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 2800);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`opening-screen ${opening ? "opening" : ""}`}>
      
      {/* Left Curtain */}
      <div className="curtain curtain-left">
        <div className="curtain-name">TANBINA</div>
      </div>

      {/* Right Curtain */}
      <div className="curtain curtain-right">
        <div className="curtain-name">KANIZ</div>
      </div>

      {/* Center line */}
      <div className="curtain-line"></div>

    </div>
  );
};

export default OpeningCurtain;