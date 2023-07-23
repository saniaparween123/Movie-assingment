export default function Rating(props) {

	return (
		<>
			<div className="rating">
				<div className="r">
					<img className="like" src="like.svg	" alt="img" onClick={props.likeClick} />
				</div>
				
				<div className="r rate">{props.votes}</div>
				
				<div className="r">
					<img className="dislike" src="dislike.svg" alt="img" onClick={props.dislikeClick}/>
				</div>
			</div>
			
		</>
	)
}

