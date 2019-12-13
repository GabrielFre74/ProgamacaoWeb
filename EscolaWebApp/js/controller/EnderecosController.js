var enderecosController = function($scope, $mdToast, enderecoApi) {

  $scope.enderecos = [];

  $scope.listar = function() {
    console.log("Listando")
    enderecoApi.listar()
      .then(function(response) {
        $scope.enderecos = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(logradouro) {
    if (logradouro.length >= 3) {
      enderecoApi.buscarPorLogradouro(logradouro)
        .then(function(response) {
          $scope.enderecos = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.logradouro = "";
    $scope.enderecos = [];
  };

}
/* removi por causa do NOME
  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      enderecoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.enderecos = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.enderecos = [];
  };

}
*/
app.controller('EnderecosController', enderecosController);
