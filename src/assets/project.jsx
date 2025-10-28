import React from "react";

function Projects({ title, framework, desc, pics }) {
  return (
    <section className="project-list">
      <h1>{title}</h1>
      <h3>{framework}</h3>
      <p>{desc}</p>
      {pics &&
        pics.map((img, index) => (
          <img key={index} src={img} alt={`project image ${index}`} />
        ))}
    </section>
  );
}

export default Projects;
