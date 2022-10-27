import React, { useState } from "react";

function NewPoemForm({ submitForm }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setBody] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    submitForm({
      title: title,
      content: content,
      author: author,
    });
  };

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
      placeholder="Author" 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea placeholder="Write your masterpiece here..." 
        rows={10} 
        value={content}
        onChange={(e) => setBody(e.target.value)}
      />
      <input 
        type="submit" 
        value="Share your masterpiece"
      />
        
    </form>
  );
}

export default NewPoemForm;
