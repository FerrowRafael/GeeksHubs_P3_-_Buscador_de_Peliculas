// const axios = require('axios'); 

document.getElementById("button").addEventListener("click", getMovies);

function getMovies(){
  event.preventDefault();
  let busquedaP= document.getElementById("busqueda").value;
  let image="https://image.tmdb.org/t/p/w300_and_h450_bestv2/";
  let key= "f1cbc5636aa2f2d3b7c9f1c1ca7c91de";
  console.log("Hola")                                                                                                                                                                                 
  axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${busquedaP}`)
  .then(res=>{
    const peliculas = res.data.results
    // console.log(busquedaP)
    // console.log(peliculas)
    document.querySelector('.peliculas').innerHTML = '';
    for (let pelicula of peliculas){
      document.querySelector('.peliculas').innerHTML +=`

      <div class='pelicula col-lg-3 my-3'>
      <h2 class="img-fluid">${pelicula.title}</h2>
      <img id="img1" src="${image}${pelicula.poster_path}"></img>
      </div>`
      // console.log(`${pelicula.id} ${pelicula.title}`)
      // let IdGenre = pelicula.genre_ids
      // getGenres(IdGenre)
      // console.log(IdGenre)
      cambiarImg(pelicula.id) 
      console.log("Hola")
    }
    
  })
  .catch((err) => {console.log(err)})  
}

//Ver donde añadir
/*<p>Resumen: ${pelicula.overview}</p>
<p>Fecha de Estreno: ${pelicula.release_date}</p>
<p>Nota: ${pelicula.vote_average}</p>
<button type="button" onclick="getDetails">Ver detalles</button>
*/

//Cambiamos imagen
function cambiarImg(id) {
  let imagen = document.getElementById("img1");
  if (imagen.src === "https://image.tmdb.org/t/p/w300_and_h450_bestv2/null") {
    console.log("hola")
    imagen.src = 'https://noescinetodoloquereluce.com/wp-content/uploads/2019/09/joker-a-1.jpg';
  }
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

  
// Sustituir imagen

