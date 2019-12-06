var enderecoController = function($scope, $mdToast, enderecoApi){

  $scope.endereco = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do endereco do $scope.
    let endereco = angular.copy($scope.endereco);

    // Limpar formulário.
    limparFormulario();

    // Redirecionamento de página.
    $state.transitionTo('enderecos', {reload: true, inherit: false, notify: true});

    enderecoApi.cadastrar(endereco)
      .then(function(response) {
        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Endereço cadastrado com sucesso!')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);

        limparFormulario();
      })
      .catch(function(error) {
        console.log(error)
        var toast = $mdToast.simple()
            .textContent('Algum problema ocorreu no envio dos dados.')
            .position('bottom left')
            .action('Entendi')
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

app.controller('EnderecoController', enderecoController);
