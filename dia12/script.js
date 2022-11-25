var fundo = document.getElementById("fundo");
var cores = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "black", "white", "gray", "brown", "cyan", "magenta", "lime", "maroon", "navy", "olive", "silver", "teal", "violet"];

function mudarFundo() {
    fundo.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}

//GitHub API
botao = document.getElementById("botao");
botao.addEventListener('click', () => {

    const userName = document.getElementById("userName");
    const profileImage = document.getElementById("profileImage");

    const followers = document.getElementById("followers");
    const following = document.getElementById("following");
    const repositories = document.getElementById("repositories");
    const company = document.getElementById("company");
    const location = document.getElementById("location");

    const input = document.getElementById("user");
    let user = input.value;
    const url = `https://api.github.com/users/${user}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Not Found") {
                alert("Usuário não encontrado!");
            } else {
                userName.textContent = data.login;
                profileImage.src = data.avatar_url;
                followers.textContent = `${data.followers} Seguidores`;
                following.textContent = `${data.following} Seguindo`;
                repositories.textContent = `${data.public_repos} Repositórios`;
                company.textContent = data.company;
                location.textContent = data.location;
            }
        });
});