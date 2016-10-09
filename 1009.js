// function Animal() {
//     this.species = "动物";
//     this.eat = "吃";



// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//     //构造函数绑定,arguments参数
//     Animal.apply(this, arguments);
//     console.log(arguments);
// }
// cat1 = new Cat("lily","red");
// Cat();
// console.log(cat1.species+" "+cat1.eat);
// function add(x,y){
// 	console.log(arguments);
// }
// add(2,3);
// function add(){
// 	console.log(arguments);
// }
// add(2,3);
// Cat.prototype = Animal.prototype;
// // Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;



// console.log(cat1.species);
// console.log(cat1.name);
// console.log(cat1.constructor);
// console.log(Cat.prototype.constructor);
// console.log(cat1.constructor == Animal);

// function Person(name,age,sex){
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// }
// person = new Person("lily","19","女");
// function Getname(){
// 	Person.apply(this, arguments);
// 	console.log(person.name);
// }
// Getname();
// function Getage(){
// 	Person.apply(this, arguments);
// 	console.log(person.age);
// }
// Getage();

// function Getsex(){
// 	Person.apply(this, arguments);
// 	console.log(person.sex);
// }
// Getsex();
// function Person(name,age,sex){
// 	this.name = name;
// 	this.Getname = function(){
// 		return this.name;
// 	}
// 	this.age = age;
// 	this.Getage = function(){
// 		return this.age;
// 	}
// 	this.sex = sex;
// 	this.Getsex = function(){
// 		return this.sex;
// 	}

// }
// person = new Person("lily","19","女");
// console.log(person.Getname());
// console.log(person.Getage());
// console.log(person.Getsex());

// function Person(name,age,sex){
// 	this.name = name;
// 	this.getName = function(){
// 		return this.name;
// 	}
// 	this.setName = function(name){
// 		this.name = name;
// 	}
// 	this.age = age;
// 	this.getAge = function(){
// 		return this.age;
// 	}
// 	this.sex = sex;
// 	this.getSex = function(){
// 		return this.sex;
// 	}

// }
// person = new Person("lily","19","女");
// person.setName("bili");
// console.log(person.Getname());
// console.log(person.Getage());
// console.log(person.Getsex());
// console.log(person.setName());

// function Teacher(school){

// 	this.school = school;
// 	Person.apply(this, arguments);
// 	this.teach = function(){
// 		console.log('1111');
// 	}


// }

//  var teacher = new Teacher("NO1 school","30","boy");
 // teacher.setName("hihi");

// function Teacher(school,name,age,sex){

// 	this.school = school;
// 	Person.apply(this, arguments);
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// 	this.teach = function(){
// 		console.log('1111');
// 	}


// }

//  var teacher = new Teacher("NO1 school","bihi","30","boy");
//  teacher.setName("yihi");



// console.log(teacher.school);
// console.log(teacher.name);
// console.log(teacher);
// console.log(teacher.setName());
// console.log(teacher.getName());
// console.log(teacher.getSex());
// console.log(teacher.getAge());
// console.log(teacher.teach());
// teacher.teach();

//object方法
// var Chinese = {
// 	nation : "中国"
// }
// var Doctor = {
// 	career : "医生"
// }
// function object(o){
// 	function F(){};

// 	F.prototype = o;

// 	return new F();
// }
// var Doctor = object(Chinese);
// Doctor.career = "医生";
// console.log(Doctor.nation);

// var Chinese = {
// 	nation : "中国"
// }
// var Doctor = {
// 	career : "医生"
// }
// function object(o){

// }
// 	function F(){};

// 	F.prototype = Chinese;

	
// var Doctor = new F();
// Doctor.career = "医生";
// console.log(Doctor.nation);

// var person = {
// 	name : "lili",
// 	age : 17,
// 	getName : function get_name(){

// 	},
// 	setName : function set_name(name){
// 		return this.name;
// 	}
// }

// function add(x,y){
// 	console.log("hhhh:"+(x+y));
// }
// var a = new add(2,2);
// console.log(a);
function Hello(){
	console.log('hello');
}
Hello.prototype = {
	name:"js",
	// sayHello:function(){
	// 	console.log('say hello');
	// }
	sayHello:function(str){
		console.log(str);
	}
}

var obj = new Hello();
// obj.sayHello();
obj.sayHello("say hello");
console.log(obj.name);
