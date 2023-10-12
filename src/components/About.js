import React from "react";

function About(prop) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <IsBio bio={prop.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={prop.github} linkedin={prop.linkedin}/>
    </div>
  );
}
function IsBio(props) {
  if (props.bio) {
    return <p>{props.bio}</p>;
  }
  return null;
}

function Links(prop) {
  return (
    <div>
      <h3>Links</h3>
      <a href={prop.github}>{prop.github}</a>
      <a href={prop.linkedin}>{prop.linkedin}</a>
    </div>
    )
}

export default About;
