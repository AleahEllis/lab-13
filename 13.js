var app = angular.module('modName', []);

app.controller('theController', function(){
	var vm = this;

	vm.words = ['love', 'jump', 'serious', 'orange'];
	
	vm.inArray=[];
	vm.pickWord = function () {
      var theWord = {};
      theWord.word = vm.words[Math.floor(Math.random() * vm.words.length)];
     	vm.inArray.push(theWord);
    };

    vm.worDeco = ['bold','strike','red','ugly','orange'];
	vm.styledArray=[];
    vm.wordDecor = function () {
      var element = {};
      element.word = vm.words[Math.floor(Math.random() * vm.words.length)];
      element.worDeco = vm.worDeco[Math.floor(Math.random() * vm.worDeco.length)];
     	vm.styledArray.push(element);
    };
	
	

    vm.phrases = ['A hot potato','A penny for your thoughts','Back to the drawing board','Best thing since sliced bread'];
	
    vm.phraseArray=[]
    vm.pickPhrase = function () {
      var thePhrase = {};
      thePhrase.phrase = vm.phrases[Math.floor(Math.random() * vm.phrases.length)];
     	vm.phraseArray.push(thePhrase);
    };


    vm.phraseDeco = ['bold','strike','red','ugly','orange'];
	vm.styledPhraseArray=[]

    vm.phraseDecor = function () {
      var phraseElement = {};
      phraseElement.phrase = vm.phrases[Math.floor(Math.random() * vm.phrases.length)];
      phraseElement.phraseDeco = vm.phraseDeco[Math.floor(Math.random() * vm.phraseDeco.length)];
     	vm.styledPhraseArray.push(phraseElement);
    };
	



});


	


	
		





