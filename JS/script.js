let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let tituloDetalhes = document.querySelector("#tituloDetalhes");
let filmesFavoritos = document.querySelector("#filmesFavoritos");

let listaFavoritos = new Array();

window.onload = function() {
	if(localStorage.getItem("favoritos")){
		listaFavoritos = JSON.parse(localStorage.getItem("favoritos"));
		console.log("LOCAL");
	}
	
  };

btnBuscarFilme.onclick = async () => {
  if(inputBuscarFilme.value.length > 0){
		let filmes = new Array();
    fetch("http://www.omdbapi.com/?apikey=88ab635&s="+inputBuscarFilme.value)
		.then((resp)=> resp.json())
		.then((resp)=> {
			resp.Search.forEach((item)=>{
				console.log(item);
				let filme=new Filme(
					item.imdbID,
					item.Title,
					item.Year,
					null,
					null,
					item.Poster,
					null,
					null,
					null,
					null,
					null
				);
				filmes.push(filme);
				
			});
			listarFilmes(filmes);
			
		})
		
  }
  return false;
}

let listarFilmes = async (filmes) => {
	let listaFilmes = await document.querySelector("#lista-filmes");
	listaFilmes.style.display="flex";
	listaFilmes.innerHTML = "";
	console.log(listaFilmes);
	if(filmes.length > 0) {
		filmes.forEach(async(filme) => {
			listaFilmes.appendChild(await filme.getCard());
			filme.getBtnDetalhes().onclick=()=>{
				
				detalhesFilme(filme.id);
				
			}
		});
	}
}

let detalhesFilme = async(id)=>{
	document.querySelector("#card-filme").innerHTML = "";

	fetch("http://www.omdbapi.com/?apikey=88ab635&i="+id)
	.then((resp)=> resp.json())
	.then((resp)=>{
		let filme=new Filme(
			resp.imdbID,
			resp.Title,
			resp.Year,
			resp.genre,
			resp.Runtime,
			resp.Poster,
			resp.Plot,	
			resp.Director,
			resp.Actors,
			resp.Awards,
			resp.imdbRating
		)
		console.log(filme);
		tituloDetalhes.innerHTML=filme.titulo;
		document.querySelector("#salvarFilme").onclick=()=>{
			salvarFilme(filme.id);
		}

		
		
		document.querySelector("#card-filme").appendChild(filme.getDetalhesFilme());
		
	});
	
}

let salvarFilme = async(id)=>{

	
	
	if(listaFavoritos.includes(id)){
		
		alert("este filme ja esta nos favoritos!");
	}
	else{
		listaFavoritos.push(id);
	}	

	localStorage.setItem("favoritos", JSON.stringify(listaFavoritos));
}

filmesFavoritos.onclick = async () => {

	let filmesSalvos = localStorage.getItem("favoritos");
	filmesSalvos=JSON.parse(filmesSalvos);
		
	
	if(filmesSalvos.length > 0){
		let filmes = new Array();
		for(let i = 0; i < filmesSalvos.length; i++){
			let filme = await fetch("http://www.omdbapi.com/?apikey=88ab635&i=" + filmesSalvos[i])
			  .then(resp => resp.json())
			  .then(resp => {
				return new Filme(
				  resp.imdbID,
				  resp.Title,
				  resp.Year,
				  null,
				  null,
				  resp.Poster,
				  null,
				  null,
				  null,
				  null,
				  null
				);
			  });
			filmes.push(filme);
		  }
		  listarFilmes(filmes);
		}
		
  }



    