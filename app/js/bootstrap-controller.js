angular.module('helloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl'];

function BootstrapController($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.salvar = function() {
        if($scope.myForm.$invalid)         {
            $growl.box("Erro", "Mensagem do erro", {class: 'warning', timeout: 4000}
            ).open();
            return;
        }
        $growl.box("Deu certo", "Que legal", {class: 'success', timeout: 4000}
        ).open();
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    };

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
    };

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.$pristine = true;
    };

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    };
}
