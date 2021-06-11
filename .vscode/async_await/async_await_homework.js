let githubUrl = 'https://api.github.com/users/Abdulvorisjs';

function getGithubUser(url) {
    return fetch(url)
    .then((response) => {
        if (response.status == 200){
            return response.json();
        } else {
            throw new Error (response.status);
        }
    });
}

getGithubUser(githubUrl)
.then((res) => {
    console.log(res);
})
.catch(console.log());