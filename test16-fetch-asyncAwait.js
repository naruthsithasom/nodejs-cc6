//การใช้async await คลอบ
const URL = 'https://covid19.th-stat.com/api/open/today'
let data

async function showCovid(){
  try {
    const res = await fetch(URL)
    data = await res.json()
    console.log(data.Hospitalized)
  } catch ( err ){ console.log(err)}
}

showCovid()