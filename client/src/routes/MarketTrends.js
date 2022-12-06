import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;

function HotMarkets() {
  const [url] = useState(
    "https://public.tableau.com/views/MarketTrends_16697191813020/CountyTrend?:language=en-US&:display_count=n&:origin=viz_share_link"
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

export default HotMarkets;
