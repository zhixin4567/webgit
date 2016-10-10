// var a = function (){
// 	var i = 1;
	
// 	function b(){
// 		console.log(i);
// 	}
	
// 	return b;
// }
// var c = a();
// c();
// console.log(c);

// var color = 'blue';
// function changeColor(){
// 	if (color === 'blue') {
// 		color = 'red';
// 	}else {
// 		color = 'blue';
// 	}
// 	console.log(color);
// }
// changeColor();
// changeColor();
// changeColor();

// var a = true;
// var a = false;
// if (a) {
// 	var m = 100;
// }
// console.log(m);
// var func = function (){
// 	var a = 1;
	
// 	return function(){
// 	a++;
// 	console.log(a);
// 	}
// }
// var f = func();
// f();f();f();f();

var nodes = document.getElementsByTagName("div");
for(var i = 0;i<nodes.length;i++){
	(function(i){
		nodes[i].onclick = function(){
		console.log(i+1);
	}

	})(i)
	}