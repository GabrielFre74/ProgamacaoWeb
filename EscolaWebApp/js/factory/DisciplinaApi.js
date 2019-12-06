// disciplina - Factory
var disciplinaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(disciplina) {
    return $http.post(baseUrl + "/disciplina", disciplina);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/disciplinas");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/disciplinas/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("disciplinaApi", disciplinaFactory);
