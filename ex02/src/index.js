let fifteenArray = [];

function* myGenerator () {
yield* insideGenerator1();
yield* insideGenerator2();
yield* insideGenerator3();
}

function* insideGenerator1() {
for (i = 1; i <= 5; i++) {
    x = i,
   
    fifteenArray.push(x);
    yield x;
}
}

function insideGenerator2() {
for (i = 10; i <= 15; i++) {
    x = i;
    
    fifteenArray.push(x);
    yield x;
}
}

function insideGenerator3() {
for (i = 6; i <= 9; i++) {
    x = i;
    
    fifteenArray.push(x);
    yield x;
}
}

var iterator = myGenerator();

for ( i = 0; i < 15; i++) {
    console.log(iterator.next().value);
}

module.exports = { fifteenArray, myGenerator };