'use client';

import React, { useState } from 'react';
import {movies} from './movie.js';
import './layout.css';
import {Space} from './header.js';
import Header from './header.js';
import Footer from './footer.js';
import MovieRow from './movie_row.js';



const MyComponent = () => {
  const [items, setItems] = useState(movies);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  


  return (
    <div>
      <Header />
      {items.map((item) => (
        <div key={item.id}>
          <MovieRow item={item} handleDelete={() => handleDelete(item.id)} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default MyComponent;






 



























