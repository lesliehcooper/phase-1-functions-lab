// Code your solution in this file!

let someValue = 50;
let start = 33;
let destination = 36;

function distanceFromHqInBlocks(someValue) {
    // returns the number of blocks given a value
    let distFromHqBlock 
    if (someValue >= 42) {
        return someValue - 42;
    }           
        else {
        return (someValue-42)*-1
    } 
    
   }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function, 
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return distanceFromHqInBlocks(someValue)*264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    // returns the number of feet traveled
    if (start > destination) {
        return (start - destination)*264;
        
    } else {
        return (destination - start)*264;
        
    }

}

function calculatesFarePrice(start, destination) {
    // returns the fare for the customer
   distanceTravelledInFeet(start, destination)
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination)-400)*0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    } 
    
        
    


    



