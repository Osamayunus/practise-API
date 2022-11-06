document.getElementById('btn-photo').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(resp => resp.json())
        .then(data => allPhoto(data))

})

function allPhoto(objects) {
    console.log(objects);
    const photoField = document.getElementById('photo-Field');

    for (let object of objects) {
        console.log(object);
        const li = document.createElement('li');
        li.innerText = object['url'];
        photoField.appendChild(li);
    }
}