// Inicializar o módulo.
let nomeApp = 'EscolaWebApp';
let modulos = ['ngMaterial', 'ngMessages'];
var app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controlador.
var homeController = function($scope){
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller('HomeController', homeController);

var alunoController = function($scope, $mdToast, alunoApi){
  $scope.aluno = {};
  let aluno = $scope.aluno;

  $scope.cadastrar = function(){
    // converter data
    var data = moment(aluno.nascimento)


    alunoApi.listar()
    .then(function(response){
      console.log("requisição enviada e recebida com sucesso");
      console.log(response);
    })
    .catch(function(error){
      console.log("houve um problema na requisição");
      console.error(error);
    });

    alunoApi.cadastrar($scope.aluno)
    .then(function(response){
      console.log("requisição enviada e recebida com sucesso");
      console.log(response);
    })
    .catch(function(error){
      var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados')
                    .position('top center')
                    .action('OK')
                    .hideDelay(6000);
                $mdToast.show(toast);
    }
    );

  }
}

app.controller('AlunoController', alunoController);

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

var campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";
}

app.factory("alunoApi", alunoFactory);

app.controller('CampusController', campusController);

var cursoController = function($scope){
  $scope.curso = {};

  $scope.cadastrar = function(){
    cursoApi.cadastrar($scope.curso)
    .the(function(response){})
    .catch(function(error){});
  };
}

app.controller('CursoController', cursoController);

var cursoFactory = function($http){
  var baseUrl = "localhost:5000"

  var _cadastrar = function(curso){
    return $http.post(baseUrl+"/curso", curso);
  };
  return {
    cadastrar: _cadastrar
  };
}

app.factory("cursoApi", cursoFactory);

var disciplinaController = function($scope){
  $scope.disciplina = {};

  $scope.cadastrar = function() {
   disciplinhaApi.cadastrar($scope.disciplina)
     .then(function(response) {})
     .catch(function(error) {});
 }
}

app.controller('DisciplinaController', disciplinaController);

var disciplinaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(disciplina) {
    return $http.post(baseUrl + "/disciplina", disciplina);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("disciplinhaApi", disciplinaFactory);

var enderecoController = function($scope){
  $scope.endereco = {};

  $scope.cadastrar = function() {
    enderecoApi.cadastrar($scope.endereco)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('EnderecoController', enderecoController);

var enderecoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(endereco) {
    return $http.post(baseUrl + "/endereco", endereco);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("enderecoApi", enderecoFactory)


var escolaController = function($scope){
  $scope.escola = {};

  $scope.cadastrar = function() {
    escolaApi.cadastrar($scope.escola)
      .then(function(response) {})
      .catch(function(error) {});
    }
}

app.controller('EscolaController', escolaController);

var escolaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(escola) {
    return $http.post(baseUrl + "/escola", escola);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("escolaApi", escolaFactory);

var professorController = function($scope){
  $scope.professor = {};

  $scope.cadastrar = function() {
    professorApi.cadastrar($scope.professor)
      .then(function(response) {})
      .catch(function(error) {});
  }
}
}

app.controller('ProfessorController', professorController);

var professorFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(professor) {
    return $http.post(baseUrl + "/professor", professor);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("professorApi", professorFactory);


var turmaController = function($scope){
  $scope. turma = {};

  $scope.cadastrar = function() {
    turmaApi.cadastrar($scope.turma)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('TurmaController', turmaController);

var turmaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(turma) {
    return $http.post(baseUrl + "/turma", turma);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("turmaApi", turmaFactory);

var turnoController = function($scope){
  $scope.turno = {};

  $scope.cadastrar = function() {
    turnoApi.cadastrar($scope.turno)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('TurnoController', turnoController);

var turnoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _cadastrar = function(turno) {
    return $http.post(baseUrl + "/turno", turno);
  };

  return {
    cadastrar: _cadastrar
  };
}

app.factory("turnoApi", turnoFactory);
