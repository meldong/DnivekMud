// =============================================================================
// loops
// =============================================================================
const names = ["mario", "luigi", "shaun", "ryu", "chun-li", "yoshi"];
for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log("in loop:", i, html);
}
console.log("loop finished");

// =============================================================================
// functions
// =============================================================================
// function expression
const greet = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}!`);
};
greet("shaun", "morning");
greet("mario", "night");
greet("chun-li", "afternoon");
greet();

// arrow function
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log("area is", area);

// method : function related to object
let uppercaseName = "shaun".toUpperCase();
console.log(uppercaseName);

// callback : function as argument
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};
myFunc(function (value) {
  console.log(value);
});

names.forEach(function (name, index) {
  console.log("in loop:", index, name);
});

const logName = (name, index) => {
  console.log(`${index} - hello ${name}`);
};
names.forEach(logName);

// =============================================================================
// objects
// =============================================================================
let user = {
  // properties
  name: "shaun",
  age: 30,
  email: "shaun@dnivek.com",
  location: "berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "ten things to make with marmite", likes: 60 },
    { title: "lang tong", likes: 90 },
  ],
  // methods
  login: function () {
    console.log("user logged in");
  },
  logout: function () {
    console.log("user logged out");
  },
  logBlogs: function () {
    console.log("user has written the following blogs:");
    this.blogs.forEach((blog, index) => {
      console.log(`${index} - ${blog.title}(${blog.likes})`);
    });
  },
};
console.log(user);
console.log(user.name, user["email"]);
console.log(typeof user);
user.login();
user.logout();
user.logBlogs();

// Math object
console.log(Math);

// primitive values stored in stack
let scoreOne = 50;
let scoreTwo = scoreOne;
scoreOne = 40;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values stored in heap
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;
userOne.age = 40;
console.log(userOne, userTwo);

// =============================================================================
// Document Object Model (DOM) to interact with browser
// =============================================================================
console.log(document);

const para = document.querySelector("p.error");
console.log(para.outerHTML);

const paras = document.querySelectorAll("p");
paras.forEach((para, index) => console.log("in loop:", index, para.outerHTML));

const errors = document.querySelectorAll(".error");
errors.forEach((error, index) =>
  console.log("in loop:", index, error.outerHTML)
);

// get element by id
const title = document.getElementById("pageTitle");
console.log(title.outerHTML);

// get element by class name
const errorsTwo = document.getElementsByClassName("error");
console.log(errors, errorsTwo);

// get element by tag name
const parasTwo = document.getElementsByTagName("p");
console.log(paras, parasTwo);

let html = ``;
names.forEach((name, index) => {
  html += `<li id='${index}'>${name}</li>`;
  console.log(html);
});

const ul = document.querySelector(".names");
ul.innerHTML = html;

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://google.com");
link.innerText = "Link to google.com";

const titleTwo = document.querySelector("h2");
console.log(titleTwo.style.color);
titleTwo.style.backgroundColor = "aquamarine";
titleTwo.style.color = "crimson";
titleTwo.style.fontSize = "32px";

const content = document.querySelector("div.error");
console.log(content.classList);
content.classList.remove("error");
content.classList.add("success");
content.innerText = "this is a success message";

const titleThree = document.querySelector(".title");
titleThree.classList.toggle("test");
console.log(titleThree.classList);
titleThree.classList.toggle("test");
console.log(titleThree.classList);
titleThree.classList.toggle("test");
console.log(titleThree.classList);
