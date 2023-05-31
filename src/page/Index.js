import React from "react";
import img from "../assets/images/me.png";

function index() {
  return (
<div className="row p-6 main-wrap">
  <article className="title">
    <h1>Hello I'm <br />
      <span>Tanawan Wongsawadee</span></h1>
    <p>web development who focuses on writing clean, elegant and efficient code.</p>
    <div className="row">
      <div className="skill">
        <p>HTML</p>
        <div className="progress">
          <div className="inside" style={{width: '90%'}}>90%</div>
        </div>
        <p>CSS</p>
        <div className="progress">
          <div className="inside" style={{width: '90%'}}>90%</div>
        </div>
        <p>PHP</p>
        <div className="progress">
          <div className="inside" style={{width: '80%'}}>80%</div>
        </div>
        <p>JS</p>
        <div className="progress">
          <div className="inside" style={{width: '80%'}}>80%</div>
        </div>
        <p>REACT</p>
        <div className="progress">
          <div className="inside" style={{width: '80%'}}>80%</div>
        </div>
        <p>NODEJS</p>
        <div className="progress">
          <div className="inside" style={{width: '70%'}}>70%</div>
        </div>
      </div>
      <div className="edu">
        <div className="icon">
          <div className="row">
            <p className="year_txt">2016-2019</p>
            <div className="circle" />
            <div className="study">
              <p>Vocational Certificate </p>
              <p>Computer Technology at Surin Technical College</p>
            </div>
          </div>
          <div className="row">
            <p className="year_txt" />
            <div className="line" />
          </div>
          <div className="row">
            <p className="year_txt">2019-2021</p>
            <div className="circle" />
            <div className="study">
              <p>High Vocational Certificate</p>
              <p>Computer Network at Surin Technical College</p>
            </div>
          </div>
          <div className="row">
            <p className="year_txt" />
            <div className="line" />
          </div>
          <div className="row">
            <p className="year_txt">2021-2024</p>
            <div className="circle" />
            <div className="study">
              <p>Bachelor Degrees</p>
              <p>Computer Engineering at Rajamangala University of Technology isan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  <div className="img">
    <img src={img} alt="me" />
  </div>
</div>

  );
}

export default index;
