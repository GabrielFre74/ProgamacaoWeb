var escolaController = function($scope, $mdToast, $state, escolaApi){

  $scope.escola = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do escola do $scope.
    let escola = angular.copy($scope.escola);

    // Limpar formulário.
    //limparFormulario();

    // Redirecionamento de página.

    escolaApi.cadastrar(escola)
      .then(function(response) {
        limparFormulario();
        $state.transitionTo('escolas', {reload: true, inherit: false, notify: true});
        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Escola cadastrada com sucesso!')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);

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

        // Reinicializa a variável escola.
        angular.copy({}, $scope.escola);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.escolaForm.$setPristine();
        $scope.escolaForm.$setUntouched();
        $scope.escolaForm.$setValidity();
    }
}

app.controller('EscolaController', escolaController);
