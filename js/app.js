angular.module('myApp', [])
    .controller('ToDoController', toDoController);

toDoController.$inject = ['$http'];

function toDoController($http) {
  var tCtrl = this;
  tCtrl.todos = [];
  tCtrl.newTodo = {
    title: ""
    , done: false
    , dateCreated: new Date()
    , dateFinished: null
  };

  tCtrl.addTodo = function() {

  }
}
