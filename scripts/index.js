// const axios = require('axios'); 

document.getElementById("button").addEventListener("click", getMovies);


function getMovies() {
  event.preventDefault();
  let busquedaP= document.getElementById("busqueda").value;
  let image="https://image.tmdb.org/t/p/w300_and_h450_bestv2/";
  let key= "f1cbc5636aa2f2d3b7c9f1c1ca7c91de";
  // console.log("Hola")                                                                                                                                                                                 
  axios
  .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${busquedaP}`)
  .then(res=>{
    const peliculas = res.data.results
    document.querySelector('.peliculas').innerHTML = '';
    for (let pelicula of peliculas){
      let pasarId = pelicula.id;
      console.log(pasarId)
      document.querySelector('.peliculas').innerHTML +=`
      <div class='pelicula col-lg-3 col-sm-3 col-xs-4 col-12 my-3 d-flex align-items-center flex-column proyectoImg'>
        <h2 >${pelicula.title}</h2>
        <img class="image" id="img1" src="${image}${pelicula.poster_path}"></img>
        <div class="middle">
          <div class="text">
            <p>Resumen: ${pelicula.overview}</p>
            <p>Fecha de Estreno: ${pelicula.release_date}</p>
            <p>Genero: ${pelicula.genre_ids}</p>
            <p>Nota: ${pelicula.vote_average}</p> 
            <p id="reparto"> Reparto:</p>
          </div>
        </div>
      </div>`
    }
    
  })
  .catch((err) => {console.log(err)})  
}

//Cambiamos imagen
function cambiarImg(id) {
  let imagen = document.getElementById("img1");
  if (imagen.src === "https://image.tmdb.org/t/p/w300_and_h450_bestv2/null") {
    // console.log("hola")
    imagen.src = 'https://noescinetodoloquereluce.com/wp-content/uploads/2019/09/joker-a-1.jpg';
  }
}
