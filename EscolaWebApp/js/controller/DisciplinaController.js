var disciplinaController = function($scope, $mdToast, $state, disciplinaApi){

  $scope.disciplina = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do disciplina do $scope.
    let disciplina = angular.copy($scope.disciplina);

    // Limpar formulário.
    //limparFormulario();

    // Redirecionamento de página.
    disciplinaApi.cadastrar(disciplina)
      .then(function(response) {

        limparFormulario();
        $state.transitionTo('disciplinas', {reload: true, inherit: false, notify: true});

        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Disciplina cadastrada com sucesso!')
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

        // Reinicializa a variável disciplina.
        angular.copy({}, $scope.disciplina);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.disciplinaForm.$setPristine();
        $scope.disciplinaForm.$setUntouched();
        $scope.disciplinaForm.$setValidity();
    }
}

app.controller('DisciplinaController', disciplinaController);
