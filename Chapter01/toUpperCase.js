//Imperative way
const toUpperCase1 = input => {
    const output = []

    for (let i = 0; i < input.length; i++) {
        output.push(input[i].toUpperCase());
    }

    return output;
}

//Declarative way
const toUpperCase2 = input => input.map(el => el.toUpperCase());

console.log(toUpperCase1(['January'])); //  [ 'JANUARY' ]
console.log(toUpperCase2(['February'])); // [ 'FEBRUARY' ]