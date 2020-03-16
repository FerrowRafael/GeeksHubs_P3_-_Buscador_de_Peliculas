//De cada pelicula sacar 
// - REPARTO 
//https://api.themoviedb.org/3/movie/475557/credits?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de

// PELICULAS RELACIONADAS
//https://api.themoviedb.org/3/movie/475557/similar?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de&language=es-ES&page=1

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
getGenres()
