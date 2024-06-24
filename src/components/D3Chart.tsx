import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Chart: React.FC = () => {
  useEffect(() => {
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    svg
      .append("circle")
      .attr("cx", 250)
      .attr("cy", 250)
      .attr("r", 50)
      .style("fill", "blue");

    return () => {
      d3.select("#chart").select("svg").remove();
    };
  }, []);

  return <div id="chart"></div>;
};

export default D3Chart;
