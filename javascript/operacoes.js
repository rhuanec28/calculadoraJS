angular.module("calc", []);
angular.module("calc").controller("Ctrl", function($scope){
    $scope.operacoes = [
        {"nome": "Soma"},
        {"nome": "Subtração"},
        {"nome": "Divisão"},
        {"nome": "Multiplicação"}
    ];
    
    $scope.operacao = "";
    var valor1 = 0;
    var valor2 = 0;
    var result = 0;
    $scope.calcular = function calcular(){

    valor1 = $scope.valor1;
    valor2 = $scope.valor2;
    console.log($scope.operacao);

    if ($scope.operacao=="Soma") {
        result = parseFloat(valor1) + parseFloat(valor2);
    }else if ($scope.operacao=="Subtração") {
        result = valor1 - valor2;
    }else if ($scope.operacao=="Multiplicação") {
        result = valor1 * valor2;
    }else{
        result = valor1 / valor2;
    }


    $scope.resultado = result;
}
})