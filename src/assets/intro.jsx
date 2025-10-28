import React from "react";
import Card from "./card";
import data from "./text.json"

function Intro() {
  return (
    <div id="home">
      <section  className="s-intro">
        <span className="intro">Hi there, My name is</span> <br />
        <h1 className="intro-name">MAISARA</h1>
        <span className="intro">or in short, simply Mai!</span>
        <ul>
          <li>Front End Developer</li>
          <li>Web Developer</li>
        </ul>
      </section>

      <Card 
      title={data.cards[0].title}
      p1={data.cards[0].p1}
      p2={data.cards[0].p2}/>
      <img src="/Arrow.png" alt="downward arrow" />
    </div>
  );
}

export default Intro;
