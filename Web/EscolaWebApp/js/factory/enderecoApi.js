// endereco - Factory
var enderecoFactory = function($http) {

  var baseUrl = "http://127.0.0.1:5000";

  var _cadastrar = function(endereco) {
    return $http.post(baseUrl + "/endereco", endereco);
  };

  var _listar = function() {
    return $http.get(baseUrl + "/enderecos");
  };

  var _pesquisarPorId = function(id) {
    return $http.get(baseUrl + "/enderecos/" + encodeURI(id));
  };

  return {
    cadastrar: _cadastrar,
    listar: _listar,
    pesquisarPorId: _pesquisarPorId
  };
}

app.factory("enderecoApi", enderecoFactory);
