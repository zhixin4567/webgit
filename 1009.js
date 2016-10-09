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
function Person(name,age,sex){
	this.name = name;
	this.Getname = function(){
		return this.name;
	}
	this.age = age;
	this.Getage = function(){
		return this.age;
	}
	this.sex = sex;
	this.Getsex = function(){
		return this.sex;
	}

}
person = new Person("lily","19","女");
console.log(person.Getname());
console.log(person.Getage());
console.log(person.Getsex());
