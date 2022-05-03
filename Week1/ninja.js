class Ninja {
    constructor(nameInput, healthInput){
        this.name = nameInput;
        this.health = healthInput;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        let info = `Hi!! I'm ${this.name}`
        console.log(info)
        return this;
    }
    showStats(){
        let stats = `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`
        console.log(stats);
        return this;
    }
    drinkSake(){
        console.log("You drank Sake!!!");
        this.health += 10;
        return this;
    }
}
let naruto = new Ninja("Naruto Uzumaki", 100);
console.log(naruto)