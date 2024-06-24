import React, { useEffect } from "react";
import p5 from "p5";

const P5Sketch: React.FC = () => {
  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(200);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };
    };

    new p5(sketch, document.getElementById("p5-sketch")!);

    return () => {
      document
        .getElementById("p5-sketch")
        ?.childNodes.forEach((node) => node.remove());
    };
  }, []);

  return <div id="p5-sketch"></div>;
};

export default P5Sketch;
