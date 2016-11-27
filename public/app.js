'use strict';

(function() {
  const input = document.getElementById('date');
  const output = document.getElementById('output');

  input.addEventListener('keyup', function(event) {
    fetch('http://fcc-api-ts.herokuapp.com/' + encodeURIComponent(input.value))
    .then(res => res.json())
    .then(res => output.value = JSON.stringify(res, null, 2))
    .catch(err => console.error(err));
  });
})();
