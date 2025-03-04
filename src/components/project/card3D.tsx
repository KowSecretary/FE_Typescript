import "../project/card3D.css";
import React from "react";

const CyberCard: React.FC = () => {
  return (
    <div className="container noselect">
      <div className="canvas">
        {[...Array(9)].map((_, index) => (
          <div key={index} className={`tracker tr-${index + 1}`}></div>
        ))}
        <div id="card">
          <div className="card-content">
            <div className="card-glare"></div>
            <div className="cyber-lines">
              {[...Array(4)].map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
            <p id="prompt">HOVER ME</p>
            <div className="title">
              CYBER
              <br />
              CARD
            </div>
            <div className="glowing-elements">
              {[...Array(3)].map((_, index) => (
                <div key={index} className={`glow-${index + 1}`}></div>
              ))}
            </div>
            <div className="subtitle">
              <span>INTERACTIVE</span>
              <span className="highlight">3D EFFECT</span>
            </div>
            <div className="card-particles">
              {[...Array(6)].map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
            <div className="corner-elements">
              {[...Array(4)].map((_, index) => (
                <span key={index}></span>
              ))}
            </div>
            <div className="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCard;
