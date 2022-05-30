console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var person = {
  firstName: 'Ioana',
  lastName: 'Gheorghe',
  email: 'ioanagheorghe@mail.ro',
  birthYear: 1995,
  pets: [
    { name: 'Maya', species: 'dog', age: '2' },
    { name: 'Toby', species: 'cat', age: '8' },
    { name: 'Bean', species: 'cat', age: '1' },
  ],
  zipCode: (450000).toString(),
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length.toString() +
    ' animale.',
);
console.log('Am acelasi email din copilarie: ' + person.email + '.');
console.log(
  'Unul dintre cele ' +
    person.pets.length.toString() +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);
console.log(2022 - person.pets[2].age);

var difference = {
  difference: 2022 - person.birthYear - person.pets[0].age,
};

var petName = {
  name: person.pets[0].name,
};
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference.difference +
    ' ani.',
);
