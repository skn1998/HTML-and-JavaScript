// alert //
// alert() is a method that is used to give some message to the user. It dosen't return anything. //

alert("This is to alert you!");

// prompt //
// prompt() is a method that is used to ask something from the user. It returns what user inputs. //

let user = prompt("What is your name?", "default");
console.log(user);

// confirm //
// confirm() is a method that is used to ask user to confirm. It returns true(if ok) and false(if cancel). //

let bool_val = confirm("Please confirm!");
console.log(bool_val);