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
//console.log(Object.keys(codeDecode));
//

//let word = 'craft block argon meter bells brown croon droop'

//console.log(Object.keys(codeDecode));



// function decode(word) {
// let firstLetter = word[0]; 
// let index = codeDecode[firstLetter] -1; 
// return word[index]; 
// }

// function decodeWords(words){
//   let newArr = [];
//   let seprateWords = words.split(' ');
//   for(let i in seprateWords){
//     newArr = seprateWords[i];

//   }

// }
// console.log(decode('apple'));
