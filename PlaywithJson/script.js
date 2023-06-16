const fs = require("fs"); // Import the 'fs' module

// Define the array of objects to be written to the file
const myData = [
  {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    age: 25,
    email: "janesmith@example.com",
  },
  {
    name: "Bob Johnson",
    age: 40,
    email: "bobjohnson@example.com",
  },
];

// Convert the array of objects to a JSON string
const jsonString = JSON.stringify(myData);

// Write the JSON string to a file
fs.writeFile("myData.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
