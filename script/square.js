document.getElementById('submit').addEventListener('click', square(document.getElementById('numberOne').value));
document.getElementById('submit').addEventListener('click', joke);

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

function square(value) {
    value = parseInt(value);
    console.log(value * value);
    document.getElementById('numberTwo').innerHTML = value * value;
    return value * value;
}