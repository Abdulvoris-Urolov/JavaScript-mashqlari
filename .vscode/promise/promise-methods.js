let urls = [
    'https://api.github.com/users/Abdulvorisjs'
]

let requests = urls.map(url => fetch(url));

Promise.all(requests)
    .then((responses) => 
        responses.forEach(res =>
            console.log(responses))
         );