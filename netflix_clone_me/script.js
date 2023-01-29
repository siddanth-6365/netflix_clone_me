
// settimeout and change img itself after some seconds



// which automatically load or call the function
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
  getHome()
}


function fetchMovies(URL, dom_element, path_type) {  // dom_element=id or class name
  // Use Fetch with the url passed down 
  fetch(URL)
    .then(respond => {/*respond.json()*/
      if (respond.ok) {
        return respond.json()
      } else { console.log(error) }})
    .then(data => {
      // console.log(data)
      showMovies(data, dom_element, path_type)
    })
    .catch(err => console.log(err))
}
function fetchHome(URL, dom_element, path_type) {  // dom_element=id or class name
  // Use Fetch with the url passed down 
  fetch(URL)
    .then(respond => {/*respond.json()*/
      if (respond.ok) {
        return respond.json()
      } else { console.log(error) }})
    .then(data => {
      // console.log(data)
      showdata(data, dom_element, path_type)
    })
    .catch(err => console.log(err))
}

function showdata(movies, dom_element, path_type) {
  const moviediv = document.getElementById(dom_element)
  
    let imgelement = document.createElement('img')
 imgelement =movies[homepage];
    
    // imgelement.setAttribute('id', movie.id)
    moviediv.appendChild(imgelement)
  }


function showMovies(movies, dom_element, path_type) {
  const iddiv = document.getElementById(dom_element)
  // loop the object of link/api/data
  for (var movie of movies.results) { // for of loops the all the elements present in results present in movies object
    let imgelement = document.createElement('img')
    // setting a attribute
    imgelement.setAttribute('id', movie.id)
    // seting source for img
    //  its the global link for tmdb site
    imgelement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}` //path_type is poster type in object  
    imgelement.style.height = "250px";
    // append(add) the img in html as we created a img element
    iddiv.appendChild(imgelement)
  }
}


function getOriginals() {
  const URL = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(URL, 'getOriginals', 'poster_path')
}

function getTrendingNow() {
  var url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url, 'getTrendingNow', 'poster_path')
}

function getTopRated() {
  var url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, 'getTopRated', 'backdrop_path')
}

function getHome(){
  var url='https://api.themoviedb.org/3/movie/550?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchHome(url, 'bgimg', 'poster_path')
  
}