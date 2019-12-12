var campiController = function($scope, $mdToast, campusApi) {

  $scope.campi = [];

  $scope.listar = function() {
    console.log("Listando")
    alunoApi.listar()
      .then(function(response) {
        $scope.alunos = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(nome) {
    if (sigla.length >= 2) {
      alunoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.alunos = [];
  };

}

app.controller('CampiController', campiController);
