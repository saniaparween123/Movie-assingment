import './layout.css';
import {Space} from './header.js';
import Header from './header.js';
import Footer from './footer.js';
import Movie_row from './movie_row.js';


export default function App() {
	return (
  		<div className="all">
			<Header />
			
			<Movie_row />
			
			<Space/>
			<Space/>
			
			<Footer />
		</div>
  );
}


