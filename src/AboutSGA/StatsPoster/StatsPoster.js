import React, { useRef } from "react";
import "./StatsPoster.css";
import AnimatedNumber from "../../countUp";

function StatsPoster() {
  const statRefs = useRef([]);

  return (
    <div className="sga-stats-poster">
      <div ref={(el) => (statRefs.current[0] = el)} className="stat-container">
        <h2 className="stat-number">
          <AnimatedNumber countDelay={103.57} number={14} />
        </h2>
        <p>{"MEDAILÍ V SVETOVEJ ORGANIZÁCII ADCC"}</p>
      </div>
      <div ref={(el) => (statRefs.current[1] = el)} className="stat-container">
        <h2 className="stat-number">
          <AnimatedNumber countDelay={50} number={29} />
        </h2>
        <p>TITULOV RÔZNYCH EURÓPSKYCH KRAJÍN V GRAPPLINGU</p>
      </div>
      <div ref={(el) => (statRefs.current[2] = el)} className="stat-container">
        <h2 className="stat-number">
          <AnimatedNumber countDelay={725} number={2} />
        </h2>
        <p>MAJSTRI SLOVNESKA V MMA</p>
      </div>
      <div ref={(el) => (statRefs.current[3] = el)} className="stat-container">
        <h2 className="stat-number">
          <AnimatedNumber countDelay={120} number={12} />
        </h2>
        <p>MMA VÍŤAZSTIEV</p>
      </div>
    </div>
  );
}

export default StatsPoster;
