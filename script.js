const people = [
  { name: "Kyle", age: 28, height: 72 },
  { name: "John", age: 39, height: 68 },
  { name: "Kevin", age: 19, height: 70 },
  { name: "Jones", age: 27, height: 65 },
];

// Map will return individual values (unlike filter that will return the entire object)
const names = people
  .map((person) => {
    return person.name;
  })
  .join(", ");

document.querySelector("#names").insertAdjacentHTML("beforeend", names);

console.log(names);

/////////////////////////////////////////////////////////

// Filter Method: uses boolean logic to determine if an element meets a certain criterea. The returned values will be the objects in which

const ages = people.filter((person) => {
  return person.age >= 28;
});

document
  .querySelector("#ages")
  .insertAdjacentHTML(
    "beforeend",
    ` ${ages[0].name} is older than 28 and ${ages[1].name} is older than 28`
  );

console.log(ages);

/////////////////////////////////////////////////////////
