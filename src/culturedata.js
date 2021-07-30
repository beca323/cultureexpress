
// const url = "https://cors-anywhere.herokuapp.com/https://cultureexpress.taipei/xml_json/opendataCH.json"
const url = 'https://beca323.github.io/hi/culture.json'
export const getData = () => fetch(url)
  .then(response => response.json())
  .then(result => {
    return result.reduce((acc, current) => {
      const x = acc.find(item => item.ID === current.ID)
      if (!x) {
        return [...acc, current]
      } else {
        return acc
      }
    }, [])
  })


// const filteredArr = arr.reduce((acc, current) => {
//   const x = acc.find(item => item.id === current.id)
//   if (!x) {
//     return acc.concat([current])
//   } else {
//     return acc
//   }
// }, [])

