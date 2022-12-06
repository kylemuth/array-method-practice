const people = [
  { name: "Kyle", age: 28, height: 72 },
  { name: "John", age: 39, height: 68 },
  { name: "Kevin", age: 19, height: 70 },
  { name: "Jones", age: 27, height: 65 },
];

// Map will return individual values (unlike filter that will return the entire object) in the form of an array
const names = people
  .map((person) => {
    return person.name;
  })
  .join(", ");

document.querySelector("#names").insertAdjacentHTML("beforeend", ` ${names}`);

console.log(names);

/////////////////////////////////////////////////////////

// Filter Method: uses boolean logic to determine if an element meets a certain criterea. The returned values will be the entire object in which the criteria was met

const ages = people.filter((person) => {
  return person.age >= 28;
});

document
  .querySelector("#ages")
  .insertAdjacentHTML(
    "beforeend",
    ` ${ages[0].name} and ${ages[1].name} are older than 28`
  );

console.log(ages);

/////////////////////////////////////////////////////////

// Reduce Method: Does what it says: it reduces down elements into a single value.

const totalHeight = people.reduce((total, person) => {
  return total + person.height;
}, 0);

const averageHeight = totalHeight / people.length;

console.log(totalHeight);
console.log(averageHeight);

document
  .querySelector("#height")
  .insertAdjacentHTML("beforeend", ` ${averageHeight} inches`);
