import React, { useState } from 'react';


function Rating() {
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



function Delete(){

	
	function DelClick(){
		
	}
	
	return (
		<img className="delete" src="del.svg" alt="img" />
	)
}



export default function Action(){
	return (
		<div className="action_ui">
			<Rating />
			<Delete />
		</div>
	)

}
