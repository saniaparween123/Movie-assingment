import Action from './Action.js';
import {Space} from './header.js';



export default function Movie_row(props) {
	return (
		<>
			<div className="Movie_row">
			
				<div className="Movie_img">

					<img src="img.png" alt="img"/>
				
				</div>
				
				<div className="Movie_details">
				
					<h1>{props.movie.title}</h1> <br/>
					<p> {props.movie.Year +' .  ' + props.movie.Duration+'   |   '+ props.movie.Gener} </p><br/>
					<h3>Description</h3>
					<p>{props.movie.Description}</p> 
					

				</div>
				<div>
					<Action />
				</div>
				
			</div>
			<div className="black_line"></div>
			<Space />
		</>
	)

}

