const API = "https://api.github.com/users/leilane18";

console.log("Antes");

const userGitHub = fetch(API)
.then((res) => res.json())  // executa somente se o fetch for correto
.then((data) => console.log(data))
.catch((error) => console.error(error))  //capturar o erro se o fetch tiver errado
.finally(() => console.log("Fim da requisição")); // executa mesmo que esteja errado ou certo

console.log("depois");


