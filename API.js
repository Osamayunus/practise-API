document.getElementById('namesIdBtn').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => namesProperties(data));
    console.log()
});

function namesProperties(objects) {
    const nameContainer = document.getElementById('nameContainer');
    for (let object of objects) {
        const name = object.name;
        const ul = document.createElement('li');
        ul.innerHTML = `<li class='color'>
         ${name}</li>
         `;
        nameContainer.appendChild(ul);
    }
}
document.getElementById('idBtn').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => idProperties(data));

})
function idProperties(datas) {
    console.log(datas);
    let idContainer = document.getElementById('idNames');
    for (let data of datas) {
        const name = data.id;
        const ul = document.createElement('li');
        ul.innerHTML = `<li class='color'>
         ${name, data.username, data.email}</li>
         `;
        idContainer.appendChild(ul);
    }

}

