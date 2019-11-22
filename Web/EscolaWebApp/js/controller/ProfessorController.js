var professorController = function($scope, $mdToast, professorApi) {

  $scope.professor = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do professor do $scope.
    let professor = angular.copy($scope.professor);

    // Converter formato da data: brazilian -> american.
    var data = moment(professor.nascimento, "DD/MM/YYYY");
    professor.nascimento = data.format("YYYY-MM-DD");

    professorApi.cadastrar(professor)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O professor foi cadastrado com sucesso!')
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

        // Reinicializa a variável professor.
        angular.copy({}, $scope.professor);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.professorForm.$setPristine();
        $scope.professorForm.$setUntouched();
        $scope.professorForm.$setValidity();
    }
}

app.controller('professorController', professorController);
