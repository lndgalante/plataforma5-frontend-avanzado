const user = {
  first_name: 'John',
  second_name: 'Doe',
};

const first_name = 'Carmack';

const { first_name: firstName, second_name: surname } = user;

console.log('\n ~ first_name', first_name);
