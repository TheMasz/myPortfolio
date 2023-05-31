import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import json from "../data.json";

function Portfolio() {
  const [counter, setCounter] = useState(0);
  const [counterPic, setCounterPic] = useState(0);

  const refList = useRef([]);
  const refImg = useRef([]);
  const refRatio = useRef([]);

  const clickHandler = (config) => {
    if (config === "next") {
      setCounter(counter + 1);
    } else if (config === "prev") {
      setCounter(counter - 1);
    }
    rotateCarousel();
    setCounterPic(0);
  };
  const rotateCarousel = () => {
    if (counter === json.data.length) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(json.data.length - 1);
    }
    refList.current.map((list) => (list.style.border = "unset"));
    if (counter < json.data.length && counter >= 0) {
      refList.current[counter].style.border = "4px solid #6454d1";
    }
  };
  const rotateImg = () => {
    if (counter < json.data.length && counter >= 0) {
      const n = refImg.current[counter].children.length;
      if (counterPic === n) {
        setCounterPic(0);
      } else if (counterPic < 0) {
        setCounterPic(n - 1);
      }
      for (let i = 0; i < n; i++) {
        refRatio.current[counter].children[i].style.background = "#ccc";
      }
      if (counterPic < n && counterPic >= 0) {
        refRatio.current[counter].children[counterPic].style.background =
          "#6454d1";
      }
    }
  };
  const selectImg = (index) => {
    setCounterPic(index);
  };

  useEffect(() => {
    rotateCarousel();
    rotateImg();
    const interval = setInterval(() => {
      setCounterPic(counterPic + 1);
      rotateImg();
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="row main-wrap">
      <div className="main">
        <ul className="frame-list">
          {json.data.map((data, i) => (
            <li
              className="frame"
              key={i}
              style={{ transform: `translateY(-${counter * 100}%)` }}
            >
              <div className="carousel-img-wrap mb-20">
                <div
                  className="img-list"
                  ref={(el) => (refImg.current[i] = el)}
                >
                  {data.pics.map((pic, i) => (
                    <div
                      className="img"
                      key={i}
                      style={{
                        transform: `translateX(-${counterPic * 100}%)`,
                        background: `url(/projects/${data.id}/${pic})`,
                      }}
                    />
                  ))}
                </div>
                <div
                  className="row ratio-list"
                  ref={(el) => (refRatio.current[i] = el)}
                >
                  {data.pics.map((pic, i) => (
                    <div
                      className="ratio"
                      key={i}
                      onClick={() => selectImg(i)}
                    />
                  ))}
                </div>
              </div>
              <div className="skill mb-20 row">
                {data.dev.map((dev, i) => (
                  <div className="circle_progress_wrap" key={i}>
                    {console.log((dev.percen/100)*360)}
                    <div
                      className="circle_progress"
                      style={{
                        backgroundImage: `conic-gradient(#00dbde ${(dev.percen/100)*360}deg, #ededed 0deg)`,
                      }}  
                    >
                      <span className="progress_value">{dev.percen}%</span>
                    </div>
                    <p className="text">{dev.name}</p>
                  </div>
                ))}
              </div>
              <div className="desc">
                <h3>Description:</h3>
                <p>{data.desc}</p>
              </div>
              <Link to={data.github} target="_blank" className="github_link">
                {data.github}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pflio_roll">
        <ul className="carousel">
          {json.data.map((data, i) => (
            <li
              className="carousel__cell"
              style={{
                transform: `translateY(-${counter * 110}%)`,
                background: `url(/projects/${data.id}/${data.pics[0]})`,
              }}
              key={i}
              ref={(el) => (refList.current[i] = el)}
            ></li>
          ))}
        </ul>
        <button
          className="previous-button"
          onClick={() => clickHandler("prev")}
        >
          Prev
        </button>
        <button className="next-button" onClick={() => clickHandler("next")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
