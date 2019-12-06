var turmaController = function($scope, $mdToast, turmaApi) {

  $scope.turma = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do turma do $scope.
    let turma = angular.copy($scope.turma);

    // Converter formato da data: brazilian -> american.
    var data = moment(turma.nascimento, "DD/MM/YYYY");
    turma.nascimento = data.format("YYYY-MM-DD");

    turmaApi.cadastrar(turma)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O turma foi cadastrado com sucesso!')
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

        // Reinicializa a variável turma.
        angular.copy({}, $scope.turma);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.turmaForm.$setPristine();
        $scope.turmaForm.$setUntouched();
        $scope.turmaForm.$setValidity();
    }
}

app.controller('TurmaController', turmaController);
