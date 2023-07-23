export default function AddMovie() {
  return (
    <div className="form">
    
      
	  <h1 className="b common" >Fill this form to add Movie</h1>
	  
	  <h3 className="b common d">Name of Movie</h3>
	  <input className="b inp_com" type="text" />
	  
	  <h3 className="b common d">Your Release Date</h3>
	  <input className="b inp_com" type="text" />
	  
	  <h3 className="b common d">Movie Duration</h3>
	  <input className="b inp_com in" type="text" /> Hours
	  <input className="b inp_com in" type="text" /> Min
	  
	  <h3 className="b common d">Movie genre</h3>
	  <h4 className="b common"> Select all that is applicabale</h4>
	  
	  <input className="b common d" type="checkbox" /> Drama <br/>
	  <input className="b common" type="checkbox"  /> Biography <br/>
	  <input className="b common" type="checkbox"  /> Romance <br/>
	  <input className="b common" type="checkbox" /> Comedy <br/>
	  <input className="b common" type="checkbox"  /> Adventure <br/>
	  <input className="b common" type="checkbox" /> Family <br/>
	  <input className="b common" type="checkbox" /> Documentary <br/>
	  
	  <h3 className="b common d" >Description</h3>
	  <textarea className="b" rows="8" cols="50"/> <br/>
	  
	  <h3 className="b common d" >Upload Image of Movie</h3>
	  <input className="b inp_com in" type="button" /> <br/>
	  
	  <button className="b addMovie"> Add Movie</button>

      
      
      
    </div>
  );
}

