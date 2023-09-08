function sum(va1, var2) {
  return va1 + var2;
}

function info(name) {
  const age = sum(10, 18);
  const profession = 'Software enginner';
  const message = `Hello ${name}, you are ${age} years old and you are a ${profession}`;
  console.log(message);
}

info('Eduardo Costa');
