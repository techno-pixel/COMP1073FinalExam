// JavaScript Document

// class representing a person object
class Person {
  constructor(name, age, gender, classes) {  // constructor that holds object characteristics
    this.name;  // this represents the object
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

// function that greets in console
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

// function that says goodbye in console
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`); // removed a period after this.name
  };
}

// instantiating two Person objects, with an array for classes, and all the other constructor variables
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// teacher class that extends person class, to use the same properties and add new ones (since a teacher is a person)
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests); // calling upon the parent class' constructor variables
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}


// instantiate a new teacher class 
let jess = new Teacher("Jessica", "Gilfillan", "25", "female", ["cats", "javascript", "music"], "Javascript", "college");