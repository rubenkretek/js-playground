const names = ["Ruben", "Cardi", "Hollie", "Kimmi"];

function removeName(name) {
  namesList = names;

  // Find the index of the name to be removed
  const index = namesList.indexOf(name);

  // Check if the name exists in the array before removing it
  if (index !== -1) {
    namesList.splice(index, 1);
  }
}

removeName("Kimmi");

console.log(names); // [ 'Ruben', 'Cardi', 'Hollie' ]

