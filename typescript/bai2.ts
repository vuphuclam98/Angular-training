interface Person {
    name?: string;
    age?: number;
    email?: string;
}

function printPerson(personObj: Person) {
    return personObj.age, personObj.name, personObj.email
  }
   
  let myObj = { name: 'dev', age: 27, email: 'hehe@gmail.com' };
  printPerson(myObj);