const baseUrl = 'https://swapi.co/api/'
const characterSection = document.querySelector('.characters')

function getCharacters() {

    fetch(baseUrl + 'people')
        .then(function (response) {
            return response.json()
        })
        .then(function (people) {
            console.log(people)
            // Write a loop
            var peopleArray = people.results
            for (var i = 0; i < peopleArray.length; i++) {
                var person = people.results[i]

                var name = person.name
                var hairColor = person.hair_color
                var height = person.height

                var html = `
          <section>
            <h3>${name}</h3>
            <ul>
              <li>Hair: ${hairColor}</li>
              <li>Height: ${height}cm</li>
            </ul>
          </section>
        `

                characterSection.innerHTML += html

            }
            var nextUrl = people.next
            return nextUrl
        })
        .then(function (urlFromAPI) {
            console.log('THEN URL', urlFromAPI)

            getMoreCharacters(urlFromAPI)


        })
}

function getMoreCharacters(url) {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (morePeople) {
            console.log(morePeople)
            var characters = morePeople.results
            for (let i = 0; i < characters.length; i++) {
                var person = characters[i]
                var name = person.name
                var hairColor = person.hair_color
                var height = person.height

                var html = `
        <section>
          <h3>${name}</h3>
          <ul>
            <li>Hair:${hairColor}</li>
            <li>Height:${height}cm</li>
          </ul>
        </section>
      `
                characterSection.innerHTML += html
            }
        })

}