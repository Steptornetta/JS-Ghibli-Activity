let request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

let data = null; // We need to initalize data outside of our onload function so we can access it later.
//let firstmovie = null;

request.onload = function()
{

	if(request.status == 200)
	{
		data = JSON.parse(this.response); 

		firstmovie = document.createElement("p"); // I wanted to create this first element so we can show the first movie description on the initial load
		let firstmoviedescription = document.createTextNode(data[0].description)

		firstmovie.appendChild(firstmoviedescription);
		document.querySelector("#firstmovie").appendChild(firstmoviedescription);

		for(let i = 0; i < data.length; i++)
		{
			let movieoption = document.createElement("option");
			let movietitle = document.createTextNode(data[i].title);

			movieoption.appendChild(movietitle);

			document.querySelector("#movielist").appendChild(movieoption);

		}

		data.forEach(
			movie=> {console.log(movie.title + " " + movie.description)}
			)


	}

}

function itemsSelected()
{
	let initial = document.querySelector("#firstmovie");

	if(initial != null) //removing the initial textnode element 
	{
		console.log(initial)
		initial.remove();		
	}


	let selectedIndex = document.querySelector("#movielist").selectedIndex;

	//console.log(data);
	//console.log(selectedIndex);

	let moviep = document.createElement("p");
	let moviedescription = document.createTextNode(data[selectedIndex].description); 
	let first = document.querySelector("#moviedata");

	if(first.firstChild != null) // Removing the first element of our moviedata tag
	{
		first.removeChild(first.firstChild);
	}

	document.querySelector("#moviedata").appendChild(moviep);

	moviep.appendChild(moviedescription);

}

request.send();
