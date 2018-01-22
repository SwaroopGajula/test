angular.module('MainCtrl',[]).controller('mainController',  function(Main,$scope){
	$scope.data = {}
	$scope.saveEmp = function(){
		console.log($scope.data)
		Main.saveEmp.save($scope.data,function(response){
			if(response.success){
				$scope.getEmps();
			}else{
				alert(response.errors.join('\n'));
			}
		})
	}
	$scope.getEmps = function(){
		Main.getEmp.get({},function(response){
			console.log(response);
			if(response.success){
				$scope.emps = response.result;
			}else{
				alert(response.errors.join('\n'));
			}
		});
	}
	$scope.getEmps();

})