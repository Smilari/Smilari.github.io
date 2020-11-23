
(function(window){
	var helloSpeaker = {};
		helloSpeaker.speak = function (){
		};
		window.helloSpeaker = helloSpeaker;
})(window)

helloSpeaker.speak = function (name){
	console.log("Hello" + " " + name);
};

