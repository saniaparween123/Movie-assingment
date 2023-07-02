
export default function MovieFatch(){

	let dataOfName=[];
	let dataOfDate=[];
	let dataOfDescription=[];
	let dataOfImage=[];
	

	fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&')
	.then((apidata)=>{
	  return apidata.json();

	}) 
	.then((api)=>{

	  
		i=0;
		while (i<10){
			dataOfName.push(api.results[i].title);
			dataOfDate.push(api.results[i].release_date);
			dataOfDescription.push(api.results[i].overview);
			dataOfImage.push(api.results[i].poster_path);
			
			i++;
	  	}
	  	
	  	let array =[dataOfName, dataOfDate,dataOfDescription,dataOfImage]
		return (
			<div className="Movie_row">
				{array}
			</div>
	})


}


