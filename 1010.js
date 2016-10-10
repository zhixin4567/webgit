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

// var nodes = document.getElementsByTagName("div");
// for(var i = 0;i<nodes.length;i++){
// 	(function(i){
// 		nodes[i].onclick = function(){
// 		console.log(i+1);
// 	}

// 	})(i)
// 	}

// 	(function (){})();//函数立即执行
// 	(function (){}());//效果相同

// 	(function f(i){
// 		console.log(i);
// 	})(23);

// var ex = {
// 	value:0,
// 	call:function(){
// 		this.value++;
// 		console.log(this.value);
// 	}
// }
// ex.call();
// ex.call();
// ex.call();
// function makeSizer(size) {
//   return function() {
//     document.body.style.fontSize = size + 'px';
//   };
// }

// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;

// var c = (function(){
// 	var p = 0;
// 	function changeBy(val){
// 		p += val;
// 	}
// 	return{
// 		jia:function(){
// 			changeBy(1);
// 		},
// 		jian:function(){
// 			changeBy(-1);
// 		},
// 		value:function(){
// 			return p;
// 		}
// 	}

// })()
// console.log(c.value());
// c.jia();
// c.jia();
// console.log(c.value());
// c.jian();
// console.log(c.value());

// var abc = (function(){
// 	console.log(1);
// 	// return 1;
// })()
// console.log(abc);
// var makeCounter = function() {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     value: function() {
//       return privateCounter;
//     }
//   }  
// };

// var Counter1 = makeCounter();
// var Counter2 = makeCounter();
// console.log(Counter1.value()); /* logs 0 */
// Counter1.increment();
// Counter1.increment();
// console.log(Counter1.value()); /* logs 2 */
// Counter1.decrement();
// console.log(Counter1.value()); /* logs 1 */
// console.log(Counter2.value()); /* logs 0 */
// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
// }

// function setupHelp() {
//     var helpText = [
//         { 'id': 'email', 'help': 'Your e-mail address' },
//         { 'id': 'name', 'help': 'Your full name' },
//         { 'id': 'age', 'help': 'Your age (you must be over 16)' }
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//         (function(i) {
//             var item = helpText[i];
//             document.getElementById(item.id).onfocus = function() {
//                 showHelp(item.help);
//             }
//         })(i)


//     }
// }

// setupHelp();

// for (var i = 1; i <5;i++){
// 	(function(){
// 		var j = i;
// 	setTimeout(function timer(){
// 		console.log(j);
// 	}
// 		,i*1000)
// 	})()
	
// }

for (var i = 1; i <5;i++){
	(function(i){
		
	setTimeout(function timer(){
		console.log(i);
	}
		,i*1000)
	})(i)
	
}