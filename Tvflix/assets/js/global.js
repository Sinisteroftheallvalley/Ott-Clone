'use strict';

const assEventOnElements = function(elements, eventType, callback)
{
for(const elem of elements)elem.addeventListener(eventType,
    callback);
}




const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addeventOnElements(searchTogglers,"click",function(){
    searchBox.classList.toggle("active");
});
const getMovieDetail = function (movieId) {
  window.localStorage.setItem("movieId", String(movieId));
};

const getMovieList = function (urlParam, genreName) {
  window.localStorage.setItem("urlParam", urlParam);
  window.localStorage.setItem("genreName", genreName);
};
