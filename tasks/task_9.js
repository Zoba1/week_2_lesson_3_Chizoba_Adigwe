const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Using forEach() to log each name to the console
names.forEach((name) => {
  console.log(name);
});

// Using map() to create a new array of uppercase names
const upperCaseNames = names.map((name) => {
  return name.toUpperCase();
});
console.log(upperCaseNames);

// Using filter() to create a new array with names containing 'a'
const namesWithA = names.filter((name) => {
  return name.includes('a') || name.includes('A');
});
console.log(namesWithA);