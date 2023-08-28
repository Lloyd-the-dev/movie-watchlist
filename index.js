//https://www.omdbapi.com/?apikey=a3013a12&t=Thor+love+and+thunder+
// API Key: a3013a12

let addedToWatchlist = false
function search(){
    const inputEl = document.getElementById("input-el")
    const userInput = inputEl.value
    fetch(`https://www.omdbapi.com/?apikey=a3013a12&t=${userInput}+`)
        .then(res => res.json())
        .then(data => {
            const poster = data.Poster
            const title = data.Title
            const rating = data.imdbRating
            const duration = data.Runtime
            const genre = data.Genre
            const plot = data.Plot
            const sect = document.getElementById("start-section")
           
          
            sect.innerHTML = 
            `
                <div class="card-container">
                    <img src=${poster} alt="" class="poster-img">
                    <div class="movie-details">
                        <div class="movie-details-first">
                            <h2>${title}</h2>
                            <i class='bx bxs-star' id="star"></i>
                            <p>${rating}</p>
                        </div>
                        <div class="movie-details-second">
                            <p>${duration}</p>
                            <p>${genre}</p>
                            <button class="watchlist-button" id="btn2"><img src="./images/watchlist.png" alt="">Watchlist</button>
                        </div>
                        <p class="plot">${plot}</p>

                    </div>
                </div>
            `
            const addBtn = document.getElementById("btn2")
            addBtn.addEventListener("click", () => {
                addedToWatchlist = true
                if(addedToWatchlist){
                    for(let i = 2; i < 10; i++){
                        localStorage.setItem(`MovieId${i}`, data.imdbID)
                    }
                 }
            })
        })
}
