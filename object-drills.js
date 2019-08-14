const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water/this.flour) * 100;
  }
}

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

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

const obj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(obj.meals[3]);

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