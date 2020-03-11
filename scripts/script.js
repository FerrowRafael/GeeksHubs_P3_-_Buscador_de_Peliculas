// let token = f1cbc5636aa2f2d3b7c9f1c1ca7c91de;

// const busqueda = event.target.value
const peliculas = res.results

// axios.get(`http://localhost:3001/search/product/${product}`).then(item => this.setState({product: item.data})).catch(err => console.error('LLegue hasta aqui'))

function getMovies(){
    axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f1cbc5636aa2f2d3b7c9f1c1ca7c91de&language=es-ES`)
    .then(res=>{
        for (pelicula in peliculas) {
            document.querySelector('.peliculas').innerHTML +=`
            // <h2>${pelicula.title}</h2>
            // <img src="${pelicula.poster_path}"></img>
            // <p>${pelicula.genre_ids}</p>
            // <p>${pelicula.overview}</p>
            // `
        console.log(peliculas)
        })
    // })

    .catch((err) => {
            console.log(err);
        })

}
getMovies();


busquedaPelis => {

}