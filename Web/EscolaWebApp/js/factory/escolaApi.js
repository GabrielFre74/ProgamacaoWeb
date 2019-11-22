// escola - Factory
var escolaFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(escola) {
    return $http.post(baseUrl + "/escola", escola);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/escolas");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/escolas/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("escolaApi", escolaFactory);
