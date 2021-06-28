let heading = document.getElementById("main"); // returns only one element
console.log(heading);
heading.innerHTML = "This is Heading";

let para = document.getElementsByClassName("para"); // returns more than one element
console.log(para);
para[0].innerHTML = "Hello! This is modified para!";