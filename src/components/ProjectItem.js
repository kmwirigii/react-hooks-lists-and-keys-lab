import React from "react";

function ProjectItem({ name, technologies }) {
  return (
    <div>
      <h3>{name}</h3> {/* Ensure name is displayed */}
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
}

export default ProjectItem;