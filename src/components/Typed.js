import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";

export default function Typed({ string, speed }) {
  const [newStr, setStr] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < string.length) {
      const timeout = setTimeout(() => {
        setStr((prevText) => prevText + string[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setStr("");
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="typed"  >
           {ReactHtmlParser(newStr)}
        <span className="sympol">I</span>
    </div>
  );
}
