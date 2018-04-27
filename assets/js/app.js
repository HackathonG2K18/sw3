const baseUrl = 'https://swapi.co/api/people/'
const characterSection = document.querySelector('#partner1')
const characterSection2 = document.querySelector('#partner2')

// const random = (Math.random() * 100).toFixed(0)

function getCharacters() {

    fetch(baseUrl + (Math.random() * 88).toFixed(0) + '/')
        .then(function (response) {
            return response.json()
        })
        .then(function (people) {
            var peopleArray = people.results
            for (var i = 0; i < peopleArray.length; i++) {
                var person = people.results[i]
                var name = person.name
                var hairColor = person.hair_color
                var height = person.height
                var gender = person.gender
                var html = `
          <section>
            <h2>${name}</h2>
            <ul>
              <li>Hair: ${hairColor}</li>
              <li>Height: ${height}cm</li>
              <li>Gender: ${gender}</li>
            </ul>
          </section>
        `
                characterSection.innerHTML += html

            }
        })
}
getCharacters();

// function getPartner2() {

//     fetch(baseUrl + (Math.random() * 88).toFixed(0) + '/')
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (people) {
//             console.log(people)
//             var peopleArray = people.results
//             for (var i = 0; i < 1; i++) {
//                 var person = people.results[i]
//                 var name = person.name
//                 var hairColor = person.hair_color
//                 var height = person.height
//                 var gender = person.gender
//                 var html = `
//           <section>
//             <h2>${name}</h2>
//             <ul>
//               <li>Hair: ${hairColor}</li>
//               <li>Height: ${height}cm</li>
//               <li>Gender: ${gender}</li>
//             </ul>
//           </section>
//         `
//                 partner2.innerHTML += html

//             }
//         })
// }
// getPartner2();