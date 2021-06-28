let arr = ["Saurav", "Kumar", "Nishant"];
// for loop //
let i;
for(i=0;i<arr.length;i+=1)
{
    console.log("Hello", arr[i], "!");
}

// for-of loop //
for(ele of arr)
{
    console.log("Hello", ele, "!");
}

// for-in loop for iterating objects//
let student = {
    name: "Saurav",
    roll: "17CH30049",
    cgpa: 8.59
};

for(ele in student)
{
    console.log(ele, ":", student[ele]);
}

// while loop //
i = 0;
while(i<arr.length)
{
    console.log("Hello", arr[i], "!");
    i+=1;
}

// do-while loop //
i = 0;
do
{
    console.log("Hello", arr[i], "!");
    i+=1;
}
while(i<arr.length);