import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function CensusDemographics() {
  const [url] = useState(
    "https://public.tableau.com/views/Demographics_16697524489690/Demographics?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
  );
  const ref = useRef(null);

  const initViz = () => {
    new tableau.Viz(ref.current, url);
  };

  useEffect(initViz, []);

  return (
    <div>
      <div style={setVizStyle} ref={ref} />
    </div>
  );
}

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default CensusDemographics;
