let generatorArray = [];

function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* arguments
}

var iterator = myGenerator(6, 7, 8);

for (i = 0; i < 13; i++) {
  console.log(iterator.next())
  
}

module.exports = { generatorArray, myGenerator };