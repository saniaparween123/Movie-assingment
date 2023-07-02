function Like(){
	return (
		<img className="like" src="like.svg	" alt="img"/>
	)
}

function Delete(){
	return (
		<img className="delete" src="del.svg" alt="img"/>
	)
}

function Dislike(){
	return (
		<img className="dislike" src="dislike.svg" alt="img"/>
	)
}

export default function Action(){
	return (
		<div className="action_ui">
			<Like />
			<Dislike />
			<Delete />
		</div>
	)

}
