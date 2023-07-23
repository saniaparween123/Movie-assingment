import './footer.css'
import {Space} from './header.js';


export default function Footer(props){

	
	return (
		<>
			<div className="addMovieFooter">
				<div>
					<h3>Add A New Movie</h3>
					<p>To add a movie you have to fill a form. The added movie will appear in the list above
					</p><br/>
				</div>
				<div>
					<button className="addMovie" onClick={props.handleAdd} >New Movie <img className="add" src="add.svg" alt="img"/></button>
				</div>
			</div>
			<Space />
			<Space />
			<Space />
			
			<div className="f_div">
			
				<img className="foo_img" src="Navgurukul.svg" alt="img"/>
				<p className="foo_text" >Class Project <font color="red"> @React </font></p>
			
			</div>
		</>
	
	)

}
