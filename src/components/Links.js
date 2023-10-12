import React from 'react'

function Links(prop) {
    console.log(prop.github)
    return (<div>
      <h2>Links</h2>
      <a href={prop.github}>{prop.github}</a>
      <a href={prop.linkedin}>{prop.linkedin}</a>
    </div>)
  }

  export default Links