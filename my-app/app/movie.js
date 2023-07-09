
/*export default function MovieFatch(){

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
*/


export const movies=[{'id':1,'title':'Dear Zindagi','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':2,'title':'Brave','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':3,'title':'Moana','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':4,'title':'Mulan','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':5,'title':'He Named Me Malala','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':6,'title':'Soul surfer','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':7,'title':'Bend it like beckhami','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':8,'title':'Into the wild','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':9,'title':'The Pursuit of Happyness','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`},
 {'id':10,'title':'The Intouchables','Year':'2016','Duration':'2h 33m', 'Gener':'Drama Romance', 'Description':`Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections`}];
 
 
 
 
 
 
 
 

