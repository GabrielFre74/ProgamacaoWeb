var campusController = function($scope, $mdToast, campusApi) {

  $scope.campus = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do campus do $scope.
    let campus = angular.copy($scope.campus);

    // Converter formato da data: brazilian -> american.
    var data = moment(campus.nascimento, "DD/MM/YYYY");
    campus.nascimento = data.format("YYYY-MM-DD");

    campusApi.cadastrar(campus)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O campus foi cadastrado com sucesso!')
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

        // Reinicializa a variável campus.
        angular.copy({}, $scope.campus);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.campusForm.$setPristine();
        $scope.campusForm.$setUntouched();
        $scope.campusForm.$setValidity();
    }
}

app.controller('campusController', campusController);
