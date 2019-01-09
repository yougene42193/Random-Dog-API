'use strict';
function getDogImage(dogBreed) {
  console.log(dogBreed);
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('button').on('click', function(event) {
    event.preventDefault();
    let dogBreed = $('.js-results').val();
    let newDogBreed;
    if (dogBreed.indexOf(' ') > 0) {
      let tmp = dogBreed.split(' ');
      newDogBreed = tmp.reverse().join('/');
      getDogImage(newDogBreed);
    } else {
      getDogImage(dogBreed);
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});