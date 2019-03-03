document.getElementById('submit').addEventListener('click', square);
document.getElementById('submit').addEventListener('click', joke);
document.getElementById('getlocal').addEventListener('click', get);

function joke() {
    $.ajax({
        url: "https://api.icndb.com/jokes/random?limitTo=[nerdy]",
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
}

function square() {
let value=document.getElementById('numberOne').value;
    value = parseInt(value);
    console.log(value * value);
    document.getElementById('numberTwo').innerHTML = value * value;
    localStorage.setItem("localvalues",value*value);
    return value * value;
}
function get(){
document.getElementById('lc').value=localStorage.getItem("localvalues");

}