//การใช้fetch แบบเดิม
const URL = 'https://covid19.th-stat.com/api/open/today'
let data

fetch(URL)
  .then( (res) => {
    return res.json()
  } )
  .then( (getURL) => {
    data = getURL
    console.log(data)
  } )
  .catch (err => {  
    console.log('incomplete fetch '+ err)
  })

