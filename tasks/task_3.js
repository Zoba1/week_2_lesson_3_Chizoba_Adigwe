let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Engineer"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }