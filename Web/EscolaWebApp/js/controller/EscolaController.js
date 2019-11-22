var escolaController = function($scope, $mdToast, escolaApi) {

  $scope.escola = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do escola do $scope.
    let escola = angular.copy($scope.escola);

    // Converter formato da data: brazilian -> american.
    var data = moment(escola.nascimento, "DD/MM/YYYY");
    escola.nascimento = data.format("YYYY-MM-DD");

    escolaApi.cadastrar(escola)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('O escola foi cadastrado com sucesso!')
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

        // Reinicializa a variável escola.
        angular.copy({}, $scope.escola);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.escolaForm.$setPristine();
        $scope.escolaForm.$setUntouched();
        $scope.escolaForm.$setValidity();
    }
}

app.controller('escolaController', escolaController);
