import orderResolver from './helpers/dependencyOrderResolver.js';

/**
 * Main function where the program starts.
 */
function main() {
  // Meeting the primary requirement here.
  /*
  var dependencies = [
    ['t-shirt', 'dress shirt'],
    ['dress shirt', 'pants'],
    ['dress shirt', 'suit jacket'],
    ['tie', 'suit jacket'],
    ['pants', 'suit jacket'],
    ['belt', 'suit jacket'],
    ['suit jacket', 'overcoat'],
    ['dress shirt', 'tie'],
    ['suit jacket', 'sun glasses'],
    ['sun glasses', 'overcoat'],
    ['left sock', 'pants'],
    ['pants', 'belt'],
    ['suit jacket', 'left shoe'],
    ['suit jacket', 'right shoe'],
    ['left shoe', 'overcoat'],
    ['right sock', 'pants'],
    ['right shoe', 'overcoat'],
    ['t-shirt', 'suit jacket'],
  ]; */

  var dependencies = [
    ['cape', 'mask'],
    ['mask', 'suit'],
    ['suit', 'belt'],
    ['sox', 'boots'],
    ['suit', 'boots']
  ];

  console.log(orderResolver.getItemOrderByDependency(dependencies));
}

main();
