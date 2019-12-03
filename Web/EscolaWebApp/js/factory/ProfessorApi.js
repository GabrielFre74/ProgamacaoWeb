// professor - Factory
var professorFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(professor) {
    return $http.post(baseUrl + "/professor", professor);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/professores");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/professores/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("professorApi", professorFactory);
