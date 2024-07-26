// For loop

// start index , end condition , increment
for(let i = 0 ; i <= 10;i++){
    console.log(i);
}

let i = 0;

while(i<=10){
    console.log(i)
    i = i+2; // increment
}


// Do While loop

do{
    console.log("DO WHILE",i)
    i++;
}while(i<=10);


// while vs do while

let j = 5;

while(j<3){
    console.log("Inside While loop")
}


let k = 5;
do{
    console.log("Inside Do-While loop")
}while(k<3)



// Break and Continue 

// break - when encounters then exit from the loop
// continue - when encounters then that perticular iteration was skipped

for(let i = 0 ; i <=10;i++){
    if(i===5){
        break;
    }
    console.log("In break loop",i)
}

console.log("Out from the Loop")


for(let i = 0 ; i <=10 ; i++){
    if(i===5){
        continue;
    }
    console.log("In continue loop",i)
}

console.log("Out from the loop")
