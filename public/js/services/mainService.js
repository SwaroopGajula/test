angular.module('MainService',[]).factory('Main',  function($resource){
	return {
		saveEmp:$resource('/api/save_emp', {}, {save:{method:'POST'}}),
		getEmp:$resource('/api/get_emp', {}, {get:{method:'GET'}})
	};
})