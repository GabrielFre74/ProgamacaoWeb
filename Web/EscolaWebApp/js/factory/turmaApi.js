// turma - Factory
var turmaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(turma) {
    return $http.post(baseUrl + "/turma", turma);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/turmas");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/turmas/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("turmaApi", turmaFactory);
