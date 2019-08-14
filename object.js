function createMyObject(){
    return  obj = {
        foo:'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        greeting: 'hello',
        sayHello (){
        return  obj.greeting;
        }
        
}
}

console.log(createMyObject());

const newObj = {
    name: 'Phoebe',
    lastName: 'Law',
}

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

console.log(updateObject(newObj));

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName(){
          return `${this.firstName}  ${this.lastName}`;
    },
};

    return person;
  }
   console.log(personMaker());
  
// deleting keys

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
function keyDeleter(obj) {
    // your code here
    delete obj.foo;
    delete obj.bar;
    return obj;
}

console.log(keyDeleter(sampleObj));  