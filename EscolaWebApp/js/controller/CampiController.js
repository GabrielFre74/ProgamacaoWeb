var campiController = function($scope, $mdToast, campusApi) {

  $scope.campi = [];

  $scope.listar = function() {
    console.log("Listando")
    campusApi.listar()
      .then(function(response) {
        $scope.campi = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(sigla) {
    if (sigla.length >= 2) {
      campusApi.buscarPorSigla(sigla)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.sigla = "";
    $scope.campi = [];
  };

}

app.controller('CampiController', campiController);
