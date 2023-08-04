// Using babel to transpile ES6 to ES5 for testing with Jest.
import orderResolver from './dependencyOrderResolver.js';

describe('Should test the primary requirement of clothing dependencies.', () => {
  test('should test the primary requirement of clothing dependencies', () => {
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
    ];

    const expectedOutput = `left sock, right sock, t-shirt
dress shirt
pants, tie
belt
suit jacket
left shoe, right shoe, sun glasses
overcoat`;

    // Call the function and compare the output with the expected output
    const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
    expect(actualOutput).toEqual(expectedOutput);
  });

  describe('Should test the Batman Outfit', () => {
    test('should test the primary requirement of clothing dependencies', () => {
      var dependencies = [
        ['cape', 'mask'],
        ['mask', 'suit'],
        ['suit', 'belt'],
        ['suit', 'cape'],
        ['sox', 'boots'],
        ['suit', 'boots'],
      ];

      const expectedOutput = `left sock, right sock, t-shirt
dress shirt
pants, tie
belt
suit jacket
left shoe, right shoe, sun glasses
overcoat`;

      // Call the function and compare the output with the expected output
      const actualOutput = orderResolver.getItemOrderByDependency(dependencies);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });