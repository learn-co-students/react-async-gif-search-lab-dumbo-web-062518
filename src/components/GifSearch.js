import React from 'react';

const GifSearch = ({ term, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Enter a Search Term:</label>
        <input type="text" value={term} onChange={handleChange}/>
        <input type="submit" value="Find Gifs"/>
      </form>
    </div>
  )
}

export default GifSearch;
