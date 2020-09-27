//logic
let todoList = [ ]

const getTodoList = (req, res) => {
  //res.send('GET method')
  res.status(200).send(todoList)
}
const createTodoList = (req, res) => {
  //res.send('Post method')
  const newTodo = {
    id: uniqueId(),
    task: req.body.task 
  }
  todoList.push(newTodo)
  res.status(201).send(newTodo)
}
const updateTodoList = (req, res) => {
  //res.send('PUT method')
  const tagGetId = String(req.params.id)
  const tagGetIdx = todoList.findIndex( todo => todo.id == tagGetId)
  todoList[tagGetIdx] = {
    id: tagGetId,
    task: req.body.task
  }
  res.status(200).send({
    messageL: 'Updating...'
  })
}
const deleteTodoList = (req, res) => {
  //res.send('DELETE method')
  const tarGetId = String(req.params.id)
  todoList = todoList.filter( index => index.id !== tarGetId)
  res.send(204).send({
    messageL: 'Deleting...'
  })
}
module.exports = {  
  createTodoList, 
  getTodoList, 
  updateTodoList, 
  deleteTodoList 
}