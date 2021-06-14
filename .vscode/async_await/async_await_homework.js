let githubUrl = 'https://api.github.com/users/Abdulvorisjs';

let h = async function getGithubUser(url) {
    await fetch(url)
    .await((response) => {
        if (response.status == 200){
            return response.json();
        } else {
            throw new Error (response.status);
        }
    });
}

getGithubUser(githubUrl)
.await((res) => {
    console.log(res);
})
.await(console.log());