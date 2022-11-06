document.getElementById('btn-post').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => allPost(data))
})
function allPost(objects) {
    console.log(objects);
    const postFiled = document.getElementById('post-Field');
    for (let object of objects) {
        const li = document.createElement('li');
        li.innerText = object.body;
        console.log(li);
        postFiled.appendChild(li);
    }

}
