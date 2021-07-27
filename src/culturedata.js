// fetch(url).then((response) => {
//   console.log(response)
//   return response.json()
// }).then((result) => {
//   console.log(result[0])
// })

// const url = "https://cors-anywhere.herokuapp.com/https://cultureexpress.taipei/xml_json/opendataCH.json"
const url = 'https://beca323.github.io/hi/culture.json'
export const getData = () => fetch(url)
  .then(response => response.json())
