var turnoController = function($scope, $mdToast, turnoApi) {

  $scope.turno = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do turno do $scope.
    let turno = angular.copy($scope.turno);

    // Converter formato da data: brazilian -> american.
    var data = moment(turno.nascimento, "DD/MM/YYYY");
    turno.nascimento = data.format("YYYY-MM-DD");

    turnoApi.cadastrar(turno)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O turno foi cadastrado com sucesso!')
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

        // Reinicializa a variável turno.
        angular.copy({}, $scope.turno);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.turnoForm.$setPristine();
        $scope.turnoForm.$setUntouched();
        $scope.turnoForm.$setValidity();
    }
}

app.controller('turnoController', turnoController);
