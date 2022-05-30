var object = {
  name: 'Larisa',
  surname: 'Breazdau',
  age: 21,
  petOwner: false,
  carOwner: true,
  birthYear: 2001,
};

console.log(object.name);
// === '21'
console.log(object.age.toString());

// Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log(object.name + ' s-a nascut in ' + object.birthYear + '.');

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.warn(
  `Afiseaza anul in care te-ai nascut scazand varsta pe care ai
  trecut-o in obiect din anul curent (un proces numit hardcodare)`,
);
console.log((2022 - object.age).toString());
