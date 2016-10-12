(function() {
    // var fun1 = function(){
    // 	this.pub = function(x,y){
    // 		console.log('pub:'+(x+y));
    // 		return x+y;
    // 	}
    // }

    // // var fun = fun1();
    // // console.log(pub(1,2));
    // var fun = new fun1();
    // console.log(fun.pub(1,2));

    // function fun2(){};

    // 	fun2.start = "";
    // 	fun2.starc = function(){
    // 		console.log('111');
    // 	}


    // function fun3(){
    // 	 fun2.apply(this, arguments);
    // }
    // console.log(fun3());
    // var fun3 = (function(){
    // 	function pp(){

    // 	};
    // 	pp.s = "111";
    // 	pp.sm = function(){

    // 	};
    // 	pp.sm();
    // 	return pp;

    // })()
    // console.log(typeof fun3);

    // console.log(fun3.s);

    // var fc = 0;

    // var fun4 =new function(){
    // 	fc++;
    // 	this.c = function(){
    // 		console.log(fc);
    // 	}
    // }
    //   fun4.c();
    //   fun4.c();
    //   console.log(typeof fun4);

    //没有构造函数，不能加prototype

    // function superClass(){
    // 	this.superValue = true;
    // }
    // superClass.prototype.getSuperValue = function(){
    // 	return this.superValue;
    // }
    // function subClass(){
    // 	this.subValue = false;
    // }
    // subClass.prototype = new superClass();
    // //继承
    // subClass.prototype.getSuperValue = function(){
    // 	return this.subValue;
    // }
    //  // sub = new superClass();
    //  sub = new subClass();
    //  console.log(sub.getSuperValue());

    // function superClass() {
    //     this.book = ["html", "js", "css"];
    // };

    // function subClass() {};
    // subClass.prototype = new superClass();
    // var ins2 = new superClass();
    // var ins1 = new subClass();
    // console.log(ins1.book);
    // ins1.book.push("hihi");
    // console.log(ins1.book);
    // console.log(ins2.book);

    // superClass.prototype.getBook = function(){
    // 	return this.book;
    // }
    // var sup = new superClass();
    //  sup.book.push("hihi");
    // console.log(sup.getBook());
    // function text() {
    //     console.log(arguments);
    //         	this.tee = function(){
    //         	if (arguments.length == 1) {
    //         		text1(arguments[0]);
    //         	}else if (arguments.length == 2) {
    //         		text2(arguments[0],arguments[1]);
    //         	}else if (arguments.length == 3) {
    //         		text3(arguments[0],arguments[1],arguments[2]);
    //         	};
    //     }
    //         	function text1(a){
    //         		console.log('text1:'+ a);

    //         	};

    //         	function text2(a,b){
    //         		console.log('text2:'+a+b);
    //         	};

    //         	function text3(a,b,c){
    //         		console.log('text3:'+a+b+c)
    //         	};
   
      
    // }

  //   function master(name){
  //   	this.name = name;
  //   };
  //    master.prototype.feed = function(animal,food){
  //    	console.log(this.name +"给"+animal.name +"喂"+food.name);
  //    };

  //    function Food(name){
  //    	this.name =name;
  //    };
  //    function Fish(){
  //    	this.f = Food;
  //    	this.f(name);
  //    };
  //    function bone(name){
  //    	this.e = Food;
  //    	this.e(name);
  //    };
  //    function Animal(name){
  //    	this.name = name;
  //    };


  //    function cat(name){
  //    	this.animal = Animal;
  //    	this.animal(name);
  //    };
  //    function dog(name){
		// this.d = Animal;
  //    	this.d(name);
  //    }

     // var person = new master("lili");
     // var cat = new cat("hihi");
     // var food = new Food("fish");
     // person.feed(cat,food);

     // console.log(cat.name);
     // var dog = new dog("lili");
     // var bone = new bone("gutou")
     // console.log(dog.name + bone.name);

     // var person = new master("laoli");
     // var dog = new dog("hihi");
     // var food = new Food("gutou");
     // person.feed(dog,food);

// foo();// TypeError
// bar(); // ReferenceError

// var foo = function bar() {
//     // ...
// };
//  foo();
 //函数声明和变量声明都会被提升 函数<变量



if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}
foo(); // "b"
var a = true;
}())
