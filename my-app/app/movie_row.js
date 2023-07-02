import Like from './like.js';
import Dislike from './dislike.js';
import Delete from './delete.js';


let data={Name:'Dear Zindagi',Year:'2016',Duration:'2h 3m', Genre:'Drama Romance',Description :`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections
`}


export default function Movie_row() {
	return (
		<>
			<div className="Movie_row">
			
				<div className="Movie_img">
					<img src="img.png" alt="img"/>
				
				</div>
				
				<div className="Movie_details">
				
					<h1>{data.Name}</h1> <br/>
					<p> {data.Year +' .  ' + data.Duration+'   |   '+ data.Genre} </p><br/>
					<h3>Description</h3>
					<p>{data.Description}</p> <br/>
					
					<Like />
					<Dislike />
					<Delete />
					
				</div>
			</div>
			<div className="black_line"></div>
		</>
	)

}
