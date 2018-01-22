var nameVar = 'Andrew';
var nameVar = 'Mike'; // on peut redefinir sans problem
// console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Test'; // ne marcher pas, on ne npeut pas redéfinir let
nameLet = 'test';

// console.log('nameLet',nameLet);

const nameConst = 'Frank';
// console.log('nameConst',nameConst);


// //var local to function, 
// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName); // var in function is only local to function

var fullName = 'Daivy Merlijs';

let test = 'Daivy'

if(fullName){
    var firstName = fullName.split(' ')[0]; 
    let test = 'Alicia;'
    console.log(firstName);
}

console.log(firstName); // with var, will be printed, not with const and let

// var are function scope, const is block scope, let is block scope 