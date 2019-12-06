var turnoController = function($scope, $mdToast, turnoApi){

  $scope.turno = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do turno do $scope.
    let turno = angular.copy($scope.turno);

    // Limpar formulário.
    limparFormulario();

    // Redirecionamento de página.
    $state.transitionTo('turnos', {reload: true, inherit: false, notify: true});

    turnoApi.cadastrar(turno)
      .then(function(response) {
        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Turno cadastrado com sucesso!')
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

        // Reinicializa a variável turno.
        angular.copy({}, $scope.turno);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.turnoForm.$setPristine();
        $scope.turnoForm.$setUntouched();
        $scope.turnoForm.$setValidity();
    }
}

app.controller('TurnoController', turnoController);
