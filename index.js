module.exports = iagModuleFour = () => {
  var tag = function(item) {
    return item;
  };

  return tag({
    one: 'The first variable is a string....',
    two: ['Second', 'is', 'an', 'array'],
    third: false
  });
};
