var disciplinaController = function($scope, $mdToast, disciplinaApi) {

  $scope.disciplina = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do disciplina do $scope.
    let disciplina = angular.copy($scope.disciplina);

    // Converter formato da data: brazilian -> american.
    var data = moment(disciplina.nascimento, "DD/MM/YYYY");
    disciplina.nascimento = data.format("YYYY-MM-DD");

    disciplinaApi.cadastrar(disciplina)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O disciplina foi cadastrado com sucesso!')
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

        // Reinicializa a variável disciplina.
        angular.copy({}, $scope.disciplina);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.disciplinaForm.$setPristine();
        $scope.disciplinaForm.$setUntouched();
        $scope.disciplinaForm.$setValidity();
    }
}

app.controller('disciplinaController', disciplinaController);
