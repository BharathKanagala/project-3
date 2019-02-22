document.getElementById('submit').addEventListener('click', function(){
let value  = document.getElementById('numberOne').value;
value = parseInt(value);
console.log(value*value);
document.getElementById('numberTwo').value = value * value;
$.ajax({
    url: "http://api.icndb.com/jokes/random?limitTo=[nerdy]",
    cache: false,
    dataType: "json",
    type: "GET",
    success: function (result, success) {
      document.getElementById('jokeId').innerHTML = 'Relax with result and enjoy the joke: '
      + result.value.joke;
    },
    error: function (result, success) {
      console.log('error');
    }
  });
});