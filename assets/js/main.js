const offsett = 0;                       // 1) define o índice inicial da paginação (começa em 0)
const limit = 10;                        // 2) define quantos itens queremos (neste caso, 10)

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offsett}&limit=${limit}`;
// 3) monta a URL usando template string (`...${}`) -> "https://.../pokemon?offset=0&limit=10"

fetch(url)                               // 4) faz a requisição HTTP GET para a URL (fetch retorna uma Promise)
  .then(response => response.json())    // 5) quando a resposta chega, converte o corpo em JSON (response.json() também retorna uma Promise)
  .then(jsonBody => console.log(jsonBody)) // 6) quando o JSON estiver pronto, imprime-o no console
  .catch(error => console.error(error)) // 7) se ocorrer algum erro em qualquer parte da cadeia, imprime o erro


// fetch(url).then(function (response) {
//     response.json().then(function(responseBody){
//         console.log(responseBody);
//     })
// })
// .catch(function (error) {
//   console.error(error);
// })
// .finally(function () {
//   console.log("Requisição concluída");
// })