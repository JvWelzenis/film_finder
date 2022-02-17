

const galleryUl = document.getElementById("movie-gallery");

let addMoviesToDom = movies.map(movie => {
    const galleryLi = document.createElement("li");
    const img = document.createElement('img');
    const a = document.createElement('a')
     a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
    img.src = movie.poster
    galleryUl.appendChild(galleryLi);
    galleryLi.appendChild(a);
    a.appendChild(img);
    return galleryLi;
});

const radioList = document.getElementById('film-finder');

radioList.addEventListener('change', e => { 
    console.log(e.target.value)
})

