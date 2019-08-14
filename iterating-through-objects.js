//Note: I didn't have time to do this during the peer programming session so doing separately for practice: 

'use strict';
//Make Student Reports: 

function makeStudentReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`);
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentReport(testData));

//Enroll in summer school

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer School');
  return students.map(student => `name: ${student.name}, status: ${student.status}, course: ${student.course}`);
}

const summerSchool2019Roster = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

console.log(enrollInSummerSchool(summerSchool2019Roster));

//Find by ID
function findById(items, idNum) {
  //items = array. idNum = id in items we're trying to find
  return items.find(item => item.id === idNum);
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
findById(data, 2) 

console.log(findById(data, 2))

//Validate Object Keys

let red = ['purple'];
let blue = ['purple'];
function validateKeys(object, expectedKeys) {
  //return true if object has all of the keys from expectedKeys, and no additional keys. 
  //return false if one or more of the expected keys is missing from the object, or if it contains extra keys not in expectedKeys.

  //find object keys
  //sort object keys and expected keys. Convert to string as you can't compare two arrays
  let objectKeys = Object.keys(object).sort().toString();
  expectedKeys = expectedKeys.sort().toString();

    //if object keys === expected keys return true, else return false 
  return objectKeys == expectedKeys;
}

const expectedKeys = ['id', 'name', 'age', 'city'];

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

console.log(validateKeys(objectA, expectedKeys)); //True

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

console.log(validateKeys(objectB, expectedKeys)); //False

const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused',
};

console.log(validateKeys(objectC, expectedKeys)); //False

const objectD = {
  foo: 2,
  bar: 'Jane Doe',
  bizz: 34,
  bang: 'Chicago',
};

console.log(validateKeys(objectD, expectedKeys)); //False