const EventEmitter = require('events')

const em1 = new EventEmitter()
let count  = 1

setInterval( () =>  em1.emit('one second'), 1000)//emit ทุกๆ1 วินาทีส่งคำสั่งนี้
setInterval( () =>  em1.emit('step2'), 1000)//emit ทุกๆ1 วินาทีส่งคำสั่งนี้

em1.on('step2', function(){
  console.log('count: '+ count)
  //console.log('OK. one second event...')
  count++
})
