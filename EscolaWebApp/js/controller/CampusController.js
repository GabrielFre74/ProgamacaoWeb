var campusController = function($scope, $state, $mdToast, campusApi){

  $scope.campus = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do campus do $scope.
    let campus = angular.copy($scope.campus);

    // Limpar formulário.
    //limparFormulario();

    campusApi.cadastrar(campus)
      .then(function(response) {
        limparFormulario();

        $state.transitionTo('campi', {reload:true, inherit: false, notify: true});

        console.log(response)

        var toast = $mdToast.simple()
            .textContent('Campus cadastrado com sucesso!')
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

        // Reinicializa a variável campus.
        angular.copy({}, $scope.campus);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.campusForm.$setPristine();
        $scope.campusForm.$setUntouched();
        $scope.campusForm.$setValidity();
    }
}

app.controller('CampusController', campusController);
