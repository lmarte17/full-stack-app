// routes for our app

var Todo = require('./todo.js');

module.exports = (app) => {

app.get('/api/todos', (req,res) => {
  Todo.find(req.query, (err, todos) => {
    if(err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.json(todos);
    }
  });
});


app.post('/api/todos', (req,res) => {
  new Todo(req.body).save((err, todo) => {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      res.json(todo);
    }
  });
});
}
