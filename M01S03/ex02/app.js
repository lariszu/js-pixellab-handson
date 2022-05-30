var person = {
  name: 'Larisa',
  surname: 'Breazdau',
  age: 21,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.log(person.friends.larry);
console.log(person.skills.javaScript);

// insert
console.warn(`
  Calculeaza diferenta si afiseaza propozitia:
  “Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name.
`);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.”
`);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(`
  Afiseaza numarul de caractere al numelui de familie al lui Steven
`);
console.log(person.friends.steven.surname.length.toString());

console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani.',
);

console.log((2022 - person.friends.steven.age).toString());

console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.steven.name +
    '.',
);

console.log(person.friends.larry.surname.length.toString());
console.log(
  (
    person.friends.steven.name.length - person.friends.carol.name.length
  ).toString(),
);
