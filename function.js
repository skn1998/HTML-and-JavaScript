// In JavaScript function overloading is not possible but default arguments are allowed. // 
// We also have arrow functions in JavaScript. //

console.log("This is function tutorial");

function greet()
{
    console.log("Hello World!");
}

function add(a, b, c = 2)
{
    let d = a + b + c;
    return d;
}

function mul(a, b, c)
{
    let d = a*b*c;
    return d;
}

greet();
console.log(add(1, 2));
console.log(add(1, 2, 10));
console.log(mul(1, 2, 3));