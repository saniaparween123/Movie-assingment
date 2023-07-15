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
  const [votes, setVotes] = useState({});


  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  
  function likeClick(id) {
  		const updateVote={...votes}
  		
  		if (updateVote[id] == undefined){
  			updateVote[id] = 1
  		}
  		else {
  			updateVote[id] += 1
  		}
		setVotes(updateVote);
		
	}

  	function dislikeClick(id) {
    	const updateVote={...votes}
    	
  		if (updateVote[id] == undefined){
  			updateVote[id] = -1
  		}
  		else {
  			updateVote[id] -= 1
  		}
		setVotes(updateVote);
		
  	}
  
	const sortedItems =items.sort((a, b) => {
		const voteA = votes[a.id] || 0;
		const voteB = votes[b.id] || 0;
		return voteB - voteA;
  });


  return (
    <div>
      <Header />
      {items.map((item) => (
        <div key={item.id}>
        
          <MovieRow 
          	item={item} 
          	handleDelete={() => handleDelete(item.id)}
        	votes= {votes[item.id]}
          	likeClick={() => likeClick(item.id)}
          	dislikeClick={() => dislikeClick(item.id)}
          	
          	 />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default MyComponent;






 



























