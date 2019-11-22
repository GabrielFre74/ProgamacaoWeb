var enderecoController = function($scope, $mdToast, enderecoApi) {

  $scope.endereco = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do endereco do $scope.
    let endereco = angular.copy($scope.endereco);

    // Converter formato da data: brazilian -> american.
    var data = moment(endereco.nascimento, "DD/MM/YYYY");
    endereco.nascimento = data.format("YYYY-MM-DD");

    enderecoApi.cadastrar(endereco)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O endereco foi cadastrado com sucesso!')
            .position('top right')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);

        limparFormulario();
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
            .textContent('Algum problema ocorreu no envio dos dados.')
            .position('top right')
            .action('OK')
            .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  let limparFormulario = function () {

        // Reinicializa a variável endereco.
        angular.copy({}, $scope.endereco);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.enderecoForm.$setPristine();
        $scope.enderecoForm.$setUntouched();
        $scope.enderecoForm.$setValidity();
    }
}

app.controller('enderecoController', enderecoController);
