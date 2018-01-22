class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `Hi. I am ${this.name} and I am ${this.age}.`
    }
    getGretting() {
        return this.name;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // !!'daivy' renvoie true, !!undefiend renvoie false

    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor())
            return `${description} The major is ${this.major}`;
        
        return description;
    }

}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;

    }
    getGretting(){

        let gretting = super.getGretting();

        if(this.hasHomeLocation())
        return `${gretting}. My home location is : ${this.homeLocation}`

    }
}

const me = new Traveler('Daivy Merlijs', 25, 'Liège');

console.log(me.getGretting());