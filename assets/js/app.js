const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('#partner1')

function getCharacters() {

    fetch(baseUrl + 'people')
        .then(function (response) {
            return response.json()
        })
        .then(function (people) {
            console.log(people)
            var peopleArray = people.results
            for (var i = 0; i < 3; i++) {
                var person = people.results[i]
                var name = person.name
                var hairColor = person.hair_color
                var height = person.height
                var species = person.species
                var gender = person.gender
                var html = `
          <section>
            <h2>${name}</h2>
            <ul>
              <li>Hair: ${hairColor}</li>
              <li>Height: ${height}cm</li>
              <li>Species: ${species}</li>
              <li>Gender: ${gender}</li>
              <button>Boldly Go</button>
            </ul>
          </section>
        `
                characterSection.innerHTML += html

            }
        })
}
getCharacters()