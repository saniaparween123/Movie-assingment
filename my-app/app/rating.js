import React, { useState } from 'react';


export default function Rating(props) {
	const [index, setIndex] = useState(0);

	function likeClick() {
		setIndex(index + 1);
	}

  	function dislikeClick() {
    	setIndex(index - 1);
  	}
  	
  	
	return (
		<>
			<div className="rating">
				<div className="r">
					<img className="like" src="like.svg	" alt="img" onClick={likeClick} />
				</div>
				
				<div className="r rate">{index}</div>
				
				<div className="r">
					<img className="dislike" src="dislike.svg" alt="img" onClick={dislikeClick}/>
				</div>
			</div>
			
		</>
	)
}

