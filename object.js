function createMyObject(){
    return  obj = {
        foo:'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello (){
        return  'hello';
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