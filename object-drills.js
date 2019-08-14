// drill 1
const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water/this.flour) * 100;
  }
}

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

//Drill 2
const myObj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quux: 4,
  spam: 5,
}
for(const  i in myObj){
  
  console.log(i, myObj[i]);
}
//Drill 3
const obj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(obj.meals[3]);


//Drill 4
const job1 = {
  name:'Jill',
  jobTitle: 'HR',
}
const job2 = {
  name:'Ted',
  jobTitle:'talks',
}
const job3 = {
  name:'Emily',
  jobTitle:'intern',
}
const job4 = {
  name:'James',
  jobTitle:'basketball player',
}
const job5 = {
  name:'Billy Bob',
  jobTitle:'country rap star',
}

const newPeople = [job1,job2,job3,job4,job5];
 for(let i in newPeople){
   console.log(`${newPeople[i].name} is in ${newPeople[i].jobTitle}!`);
 }

 //Properties that aren't there

const job1b = {
  name:'Jill',
  jobTitle: 'Owner',
}
const job2b = {
  name:'Ted',
  jobTitle:'Senior Talker',
  boss: 'Jill'
}
const job3b = {
  name:'Emily',
  jobTitle:'intern',
  boss: 'Ted'
}
const job4b = {
  name:'James',
  jobTitle:'basketball player',
  boss: 'Jill'
}
const job5b = {
  name:'Billy Bob',
  jobTitle:'country rap star',
  boss: 'no one'
}

const newPeopleB = [job1b,job2b,job3b,job4b,job5b];
 for(let i in newPeopleB){
   //Conditional below loops through newPeopleB[i]. If boss key is found, returns true; else false statement.
  newPeopleB[i].boss ? console.log(`${newPeopleB[i].jobTitle} ${newPeopleB[i].name} reports to ${newPeopleB[i].boss}.`) : console.log(`${newPeopleB[i].jobTitle} ${newPeopleB[i].name} doesn't report to anybody.`);
 }

 //Drill 6 
 function decode(word){
    
  if(word[0]=== 'a'){
      return word[2]
  }
   else if(word[0]=== 'b'){
      return word[3]
  }
  else if(word[0]=== 'c'){
      return word[4]
  }
  else if(word[0]=== 'd'){
      return word[5]
  }
  else{
      return '';
  }
}


const codeDecode ={
 'a' : 2,
 'b' : 3,
 'c' : 4, 
 'd' : 5,
}
function decoder (words){
  const cipher ={
    'a' : 2,
    'b' : 3,
    'c' : 4, 
    'd' : 5,
   }
   const wordsArr = words.split(' ');
   const decodedArr = wordsArr.map(word => {
    let offset ;
    if(cipher[word[0]]){
      offset = cipher[word[0]] - 1
    }
     return offset ? word[offset] : ' ' 
   });
    return decodedArr.join('');
 

}
console.log(decoder('craft block argon meter bells brown croon droop'));

// Drill 7

//Create a factory function given the provided parameters:
function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    'name': name,
    'nickname': nickname,
    'race': race,
    'origin': origin, 
    'attack': attack,
    'defense': defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin}.`
    },
    evaluateFight(character) {
      // Evaluates the outcome of a fight given this character and the opponent's attack and defense values. If the character's defense value is higher than the opponent's attack value, the damage should be zero. 
      return (character.attack-this.defense > 0) ? `Your opponent takes ${this.attack-character.defense} damage and you receive ${character.attack-this.defense} damage.` : `Your opponent takes ${this.attack-character.defense} damage and you receive 0 damage.`
    }
  }
}

//Create an array of characters using the function and the character's value property keys.
const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', '10', '6'), createCharacter('Bilbo Baggins', 'bilbo','Hobbit', 'The Shire', '2', '1'), createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', '3', '2'), createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', '6', '8'), createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', '8', '5')];

//Add Arwen to the array of characters.
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendale', '4', '9'));

//using .find(), retrieves character nicknamed aragorn from characters and then call his describe method.
const detailedChar = characters.find(character => {return character.nickname === 'aragorn'});
console.log(detailedChar.describe());

//Using the .filter(), creates a new array "hobbits" from characters that ONLY contains characters of the race Hobbit.
const hobbits = characters.filter(character => (character.race === 'Hobbit'));
console.log(hobbits);

// Using the .filter() function, create a new array from characters that ONLY have attack value above 5.
const attackAboveFive = characters.filter(character => (character.attack > 5));
console.log(attackAboveFive);