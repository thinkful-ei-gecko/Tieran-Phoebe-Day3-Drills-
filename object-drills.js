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