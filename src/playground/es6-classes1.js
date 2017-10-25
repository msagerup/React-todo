class Person  {
	constructor(name, age = 0) {
		this.name = name;
		this.age = age;
		

	}
	getGreeting() {
		return `Hi I am ${this.name}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} years old.`
	}
}






class Traveler extends Person {
	constructor(name,age,location) {
		super(name,age)
		this.location = location;
	}
	hasLocation(){
		return !!this.location;
	}
	getGreeting () {
		let greeting = super.getGreeting();

		if(this.hasLocation()){
			greeting += `  I have been travling to the: ${this.location}`
		}

		return greeting;
	}

}

const tore = new Traveler('Tore', 51, 'Hills')
console.log(tore.getGreeting())




class Student extends Person {
	 constructor(name,age,major) {
	 	super(name,age)
	 	this.major = major;
	 }
	 hasMajor(){
	 	return !!this.major;
	 }
	 getDescription() {
	 	let descripton = super.getDescription();

	 	if(this.hasMajor()) {
	 		descripton += ` Their major is: ${this.major}`
	 	}

	 	return descripton;
	 }
}





const me = new Student('Magnus Sagerup', 36, 'Photo')

const you = new Student ('Eimear Joyce', 24, 'arts')




