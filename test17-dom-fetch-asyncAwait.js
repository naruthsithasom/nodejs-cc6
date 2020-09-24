const URL = 'https://covid19.th-stat.com/api/open/today'
let data

function addTag(label, content){
    let p = document.createElement('p')
    p.innerText = `${label} : ${content}`
    document.body.appendChild(p)
}

async function showCovid(){
  try {
    const res = await fetch(URL)
    data = await res.json()
    for(key in data){
        //console.log(data[key]+' : '+key)
        addTag(key, data[key]) //ส่ง key กับ value ของ object
    }
  } catch ( err ){ console.log(err)}
}
showCovid()
