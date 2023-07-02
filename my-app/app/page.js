
import './layout.css';
import {Space} from './header.js';
import Header from './header.js';
import Footer from './footer.js';
import Movie_row from './movie_row.js';
import {movies} from './movie.js';
import Counter from './counting.js'


export default function My_movie_data() {
	return (
		<>
			<Header />
			
			{movies.map(movie =>
				<Movie_row movie={movie} />
				
			)}
			
			
			<Space/>
			<Footer />
		</>
	
	
	
	)


}





























