import './header.css';

export function Space(){
	return (
		<div className="space"></div>
	)
}

export default function Header(){
	return (
		<>
			<Space />
			<Space />
			<div className="h_div">
				<div className="c col1">
					<img src="icon.png" alt="img"/>
				</div>
				
				<div className="c col2">
					<b>Movie Hub</b>
				</div>
				
				<div className="c1 col4">
					<p>Add Movie</p>
				</div>
				
				<div className="c1 col3">
					<p>Watch</p>
				</div>
			
			</div>
			<Space/>
			<div className="line"></div>
			<Space/>
			<Space />
			<Space />
			
		</>
	
	)

}
