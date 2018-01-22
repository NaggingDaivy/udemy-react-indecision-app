class OldSyntax {
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting()); // pas de this donc fail

//-------
class NewSyntax {
    name = 'Jen';

    getGreeting = () => `Hi. My name is ${this.name}`; // pas besoin de bind :)

    

}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());