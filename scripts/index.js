// const axios = require('axios'); 

document.getElementById("button").addEventListener("click", getMovies);

function getMovies(){
  let busquedaP= document.getElementById("busqueda").value;
  let image="https://image.tmdb.org/t/p/w300_and_h450_bestv2/";
  let key= "f1cbc5636aa2f2d3b7c9f1c1ca7c91de";
                                                                                                                                                                                    
  axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${busquedaP}`)
  .then(res=>{
    const peliculas = res.data.results
    console.log(busquedaP)
    console.log(peliculas)
    document.querySelector('.peliculas').innerHTML = '';
    for (let pelicula of peliculas){
      document.querySelector('.peliculas').innerHTML +=`
      <h2>${pelicula.title}</h2>
      <img src="${image}${pelicula.poster_path}"></img>
      <p>Resumen: ${pelicula.overview}</p>
      <p>Fecha de Estreno: ${pelicula.release_date}</p>
      <p>Nota: ${pelicula.vote_average}</p>
      <button type="button" onclick="getDetails">Ver detalles</button>`
      // console.log(`${pelicula.id} ${pelicula.title}`)
      let IdGenre = pelicula.genre_ids
      getGenres(IdGenre)
      // console.log(IdGenre)
    }
    
  })
  .catch((err) => {console.log(err)})  
}


/* *** Genero *** */

function getGenres(IdGenre){

  console.log(`Generos: ${IdGenre[0]}`)
  let key= "f1cbc5636aa2f2d3b7c9f1c1ca7c91de";
  axios
  .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
  .then(res=>{
    let generos = res;
    let genero = Object.values(generos);
    genero.forEach(element => {
      document.querySelector('.generos').innerHTML +=`
      <p>${element.name}</p>`
    })
  })
}

  
