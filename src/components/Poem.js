import React, { useState } from "react";

function Poem({ poem }) {
  const [read, setRead] = useState(false);

  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>{poem.author}</strong>
      </p>
      <button onClick={(e) => setRead(!read)}>{read ? 'Mark as read' : 'Mark as unread'}</button>
    </div>
  );
}

export default Poem;

