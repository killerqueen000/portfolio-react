import React, { Children } from "react";

function Card({ title, p1, p2, className, children }) {
  return (
    <section className={`s-intro-sec ${className || ""}`}>
      <h1 className="intro-name sec">{title}</h1>
      <p>{p1}</p>
      <br />
      <br />
      <p>{p2}</p>

      {children}
    </section>
  );
}

export default Card;
