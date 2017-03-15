function search() {
    let movie = document.getElementById('movie').value
    if (movie) {
        fetch(`http://www.omdbapi.com/?t=${movie}`).then(function (response) {
            response.json().then(movie => {
                console.log(movie)
                renderMovieInfo(movie)
            })
        })
    } else{
        renderAlert()
    }
}

function renderMovieInfo({ Title, Poster }) {
    let main = document.getElementById('main')
    main.innerHTML = ''
    document.getElementById('movie').value = ''
    let div = document.createElement('div')
    div.className = 'container'
    let heading = document.createElement('h1')
    heading.innerHTML = Title
    let image = document.createElement('img')
    image.src = Poster
    div.appendChild(heading)
    div.appendChild(image)
    main.appendChild(div)
}

function renderAlert(){
    let main = document.getElementById('main')
    main.innerHTML = ''
    let span = document.createElement('span')
    span.innerHTML= 'Please fill in your query'
    main.appendChild(span)
}