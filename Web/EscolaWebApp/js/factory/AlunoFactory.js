var alunoFactory = function($http){
  var baseUrl = "localhost:5000";

  var _cadastrar = function(aluno){
    return $http.post(baseUrl + "/aluno", aluno);
  };

  var _listar = function(){
    return $http.get(baseUrl + "/alunos")
  };

  return{
    cadastrar: _cadastrar
    listar: _listar
  };
};
app.factory("alunoApi", alunoFactory);
