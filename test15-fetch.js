let result = {}
fetch('https://covid19.th-stat.com/api/open/today')
  .then((response) => {
    return response.json()
})
  .then((data) => {
    result = data
})
console.log(result)