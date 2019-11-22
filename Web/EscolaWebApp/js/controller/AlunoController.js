var alunoController = function($scope, $mdToast, alunoApi){
  $scope.aluno = {};
  let aluno = $scope.aluno;

  $scope.cadastrar = function(){
    // converter data
    var data = moment(aluno.nascimento)


    alunoApi.listar()
    .then(function(response){
      console.log("requisição enviada e recebida com sucesso");
      console.log(response);
    })
    .catch(function(error){
      console.log("houve um problema na requisição");
      console.error(error);
    });

    alunoApi.cadastrar($scope.aluno)
    .then(function(response){
      console.log("requisição enviada e recebida com sucesso");
      console.log(response);
    })
    .catch(function(error){
      var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados')
                    .position('top center')
                    .action('OK')
                    .hideDelay(6000);
                $mdToast.show(toast);
    }
    );

  }
}

app.controller('AlunoController', alunoController);
