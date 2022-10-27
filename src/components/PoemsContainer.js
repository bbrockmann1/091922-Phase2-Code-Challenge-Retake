import React from "react";
// eslint-disable-next-line
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  return (
    <div className="poems-container">
      {poems.map(poem => <Poem key={poem.title} poem={poem}/>)}
    </div>
  );
}

export default PoemsContainer;
