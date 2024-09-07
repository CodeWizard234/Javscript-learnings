// const tinderUser = new Object() // singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "11242afa";
tinderUser.name = "michael";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullName: {
      firstname: "AQUA",
      lastname: "DAVID"
    }
  }
};

console.log(regularUser.fullname.userfullName.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };

// Here we used object.assign() static method
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };

console.log(obj3);

// when values come from database
const users = [
  {
    id: 1,
    email: "a@gamil.com"
  },
  {
    id: 1,
    email: "a@gamil.com"
  },
  {
    id: 1,
    email: "a@gamil.com"
  }
];

users[1].email;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// to check whether property exists or not
// we can use hasOwnProperty method
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false

// Destructuring of Objects
const course = {
  coursename: "Java in English",
  courseInstructor: "AQUA"
};

const { courseInstructor: instructor } = course;

console.log(instructor);

// test object file

// Json basics
{
  "name": "AQUA",
  "coursename": "CODING DAILY",
  "price": "9998"
}

[
  {},
  {},
  {}
]
