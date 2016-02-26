var app = angular.module('modName', []);

app.controller('theController', function(){
	var vm = this;

	vm.words = ['love', 'jump', 'serious', 'orange']
	
	vm.randomW = function () {
		var getIndex=vm.words[Math.floor(Math.random()*vm.words.length)];
       	$("#display1").append(getIndex + "<br/>");
    };

    vm.phrases = ['A hot potato','A penny for your thoughts','Back to the drawing board','Best thing since sliced bread'];
	
	vm.randomP = function () {
		var getIndex=vm.phrases[Math.floor(Math.random()*vm.phrases.length)];
       	$("#display2").append(getIndex + "<br/>");
    };
	



});


	


	
		





