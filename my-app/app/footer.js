import './footer.css'
import {Space} from './header.js';

export default function Footer(){
	return (
		<>
			<div className="addMovieFooter">
				<h3>Add A New Movie</h3>
				<p>To add a movie you have to fill a form. The added movie will appear in the list above
</p><br/>
				<button className="addMovie" >New Movie <img className="add" src="add.svg" alt="img"/></button>
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
