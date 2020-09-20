let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing i built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfIsDone = () => {
  isItDoneYet.then( ok => {
    console.log('--: come from resolve in Promise')
    console.log('>>: ' + ok)
  }).catch( err => {
    console.log('come from reject state in Promise')
    console.error(err)
  })
}
checkIfIsDone()

