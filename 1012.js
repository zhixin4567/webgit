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

    function superClass() {
        this.book = ["html", "js", "css"];
    };

    function subClass() {};
    subClass.prototype = new superClass();
    // var ins2 = new superClass();
    // var ins1 = new subClass();
    // console.log(ins1.book);
    // ins1.book.push("hihi");
    // console.log(ins1.book);
    // console.log(ins2.book);

    superClass.prototype.getBook = function(){
    	return this.book;
    }
    var sup = new superClass();
     sup.book.push("hihi");
    console.log(sup.getBook());
}())
