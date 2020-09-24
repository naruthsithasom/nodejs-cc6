const  mc = require('./class-my/myClass')
const mu = require('./module-my/myUtil')

const customer = new mc.myHuman('Newclear') //ถ้าไม่ใส่พารามิเตอร์ไม่ครบ จะใช้ dependency
customer.info()

const employee = new mc.myHuman('Dean',32)
employee.info()