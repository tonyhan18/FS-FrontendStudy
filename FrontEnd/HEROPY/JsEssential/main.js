// 반복문 (For statement)
// for (시작조건 ; 종료조건 ; 변화조건 ){}

// const ulEl = document.querySelector('ul')

// for (let i = 0 ; i < 10; i++)
// {
// 	const li = document.createElement('li')
// 	li.textContent = `list - ${i + 1}`
// 	if((i+1) % 2 === 0) {
// 		li.addEventListener('click', function() {
// 			console.log(li.textContent)
// 		})
// 	}
// 	ulEl.appendChild(li)
// }



// 변수 유효범위
// var, let, const

// function scope() {
// 	if(true) {
// 		var a = 123
// 	}
// 	console.log(a)
// }
// scope()



// 형 변환 (Type conversion)

// Truthy (참 같은 값)
// true, [], 1, 2, 'false', -12, '3.14', ...

// Falsy (거짓 같은 값)
// flase, '', null, undefined, 0, -0, NaN

// const a = 1
// const b = '1'

// console.log(a == b)

// if ('false') {
// 	console.log(123)
// }



//////////////////////////////////////

// 함수 복습

// // 기명 함수
// function sum1(x, y) {
// 	return x + y
// }
// // 익명 함수
// const sum2 = function (x, y) {
// 	return x + y
// }
// function sum3() {
// 	console.log(arguments)
// 	return arguments[0] + arguments[1]
// }
// console.log(sum3(1,3))



// 화살표 함수
// () => {} vs function () {}

// const double = function (x) {
// 	return x * 2
// }
// console.log('double : ', double(3))

// const doubleArrow1 = (x) => {
// 	return x * 2
// }
// const doubleArrow2 = x => x * 2
// const doubleArrow3 = x => {x * 2}
// const doubleArrow4 = x => ({name: "tonyhan18"})
// console.log('doubleArrow : ', doubleArrow2(3))


// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double() {
// 	console.log(a * 7)
// }
// double();

// (function () {
// 	console.log(a*2)
// })();

// (function () {
// 	console.log(a*2)
// }());




// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double()
// function double() {
// 	console.log(a * 2)
// }




// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer = setInterval(() => {
// 	console.log('tonyhan18')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
// 	clearInterval(timer)
// })



// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// function timeout(callback) {
// 	setTimeout(() => {
// 		console.log('tonyhan18')
// 		callback()
// 	}, 3000)
// }
// timeout(() => {
// 	console.log('Done!')
// })



// 클래스
// function User(first, last) {
// 	this.firstName = first
// 	this.lastName = last
// }
// User.prototype.getFullName = function() {
// 	return `${this.firstName} ${this.lastName}`
// }

// const tonyhan = new User('tony', 'han')
// const wolf = new User('Hungry', 'Wolf')
// const glass = new User('Glass', "Musta")

// console.log(tonyhan.getFullName())
// console.log(wolf)
// console.log(glass)


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const tonyhan = {
// 	name: 'tonyhan',
// 	normal: function() {
// 		console.log(this.name)
// 	},
// 	arrow: () => {
// 		console.log(this.name)
// 	}
// }
// tonyhan.normal()
// tonyhan.arrow()

// const wolf = {
// 	name:'wolf',
// 	normal: tonyhan.normal,
// 	arrow: tonyhan.arrow
// }
// wolf.normal()
// wolf.arrow()


// function User(name) {
// 	this.name = name
// }
// User.prototype.normal = function() {
// 	console.log(this.name)
// }
// User.prototype.arrow = () =>{
// 	console.log(this.name)
// }
// const tonyhan = new User('tonyhan')

// tonyhan.normal()
// tonyhan.arrow()


// const timer = {
// 	name: 'tonyhan',
// 	timeout: function() {
// 		setTimeout(() => {
// 			console.log(this.name)
// 		}, 2000)
// 	}
// }
// timer.timeout()



// const tonyhan = {
// 	name: 'tonyhan',
// 	normal() {
// 		console.log(this.name)
// 	},
// 	arrow: () => {
// 		console.log(this.name)
// 	}
// }

// tonyhan.normal()
// tonyhan.arrow()




// ES6 Classes
// function User(first, last) {
// 	this.firstName = first
// 	this.lastName = last
// }
// User.prototype.getFullName = function() {
// 	return `${this.firstNamec} ${this.lastName}`
// }

// class User {
// 	constructor(first, last) {
// 		this.firstName = first
// 		this.lastName = last
// 	}
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`
// 	}
// }

// const tonyhan = new User('tony', 'han')
// const wolf = new User('Hungry', 'Wolf')
// const glass = new User('Glass', "Musta")

// console.log(tonyhan.getFullName())
// console.log(wolf)
// console.log(glass)


// 상속
// class Vehicle {
// 	constructor(name, wheel) {
// 		this.name = name
// 		this.wheel = wheel
// 	}
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
// 	constructor(name,wheel) {
// 		super(name,wheel)
// 	}
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 2)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
// 	constructor(name, wheel, license) {
// 		super(name,wheel)
// 		this.license = license
// 	}
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)

// console.log(myCar)
// console.log(daughtersCar)