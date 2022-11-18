import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const mudarFilme = document.querySelector('#mudarFilme')
mudarFilme.addEventListener('click', getFilme)

function getFilme() {

  const id = Math.floor(Math.random() * 1000) + 1
  const url = `${BASE_URL}${id}?${API_KEY}&${language}`

  axios.get(url)
  .then(response => {
    const data = response.data
    filme.innerHTML = `
      <img src="${IMG_URL + data.poster_path}" alt="${data.title}">'
      <div>
        <h2>${data.title}</h2>
        <p>${data.overview}</p>
      </div>
    `
  })
  .catch(error => {
    filme.innerHTML = `
      <img src="./assets/Poster.png" alt="error">
      <div>
        <h2>Ops! hoje não é dia de assistir filme. Bora codar! 🚀</h2>
      </div>
    `
  })
}