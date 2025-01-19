let btn = document.getElementById('btn');

function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            let resp = response.text()
            return resp;
        })
        .then(function (text) {
            let output = document.getElementById('output');
            let parse = JSON.parse(text);
            for (i = 0; i < parse.length; i++) {
                let user = parse[i];
                output.innerHTML += `
    <p>Name: ${user.name}</p>
    <p>E-mail: ${user.email}</p>
    <p>Address: ${user.address.street},  ${user.address.suite},  ${user.address.city}, ${user.address.zipcode}</p>
    <p>Phone Number: ${user.phone}</p>
    <hr>
    `
            }
        })
        .catch(function (){
            output.innerHTML = '<p>There was an error fetching the data.</p>';
        });
}

btn.addEventListener('click', function () {
    fetchUser()
}
)