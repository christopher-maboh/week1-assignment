import people from './people.json';

people.forEach(function (person) {
  const names = person.name.split(' ');
  const [firstName, lastName] = names;
  const {email, phone} = person;

  console.log(`First name:${firstName} Last name: ${lastName} Email:${email} Phone number:  ${phone }`);
});