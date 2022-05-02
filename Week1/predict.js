// #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Tesla and Mercedes will pop up. Cuz of the " ,<--" in line 4 

// =========================================

// #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Error, name not defined

// =========================================

// #3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// It'll log 12345 and then 12345 again? 
// Didnt post the password again. Posted undefined instead

// =========================================

// 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// First one is False and the second one I have no idea cuz I have no idea what the commas mean -> (30 seconds later) Nevermind second one is True. Commas are the other numbers its skipping.

// =========================================

// 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Key will log boths keys (line 62 and 63) and same for second key. secondkey[0] will log line 62? and WillThisWork will log line 63 info??

// What a simpleton. Nope I was wrong. I see how that was tho. 

// =========================================

