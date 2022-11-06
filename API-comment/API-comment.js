document.getElementById('btn-comment').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => allComment(data))
})
function allComment(objects) {
    console.log(objects)
    const commentFiled = document.getElementById('comment-Field');
    for (let object of objects) {
        const p = document.createElement('p');
        p.innerText = object.marker
        console.log(p);
        commentFiled.appendChild(p);
    }
}