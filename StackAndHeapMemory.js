// Stack Memory(Primitive DataTypes),  Heap Memory (Non Primitive DataTypes)
let myYoutube = "DUDs"
let another = myYoutube
another = "TauhaAnees"
console.log(myYoutube);
console.log(another);

let userOne = {
    email:"tauha@gmail.com",
    user: "ShinobiHere",
}
console.log(userOne);
let userTwo = userOne
userTwo.email = "Tauha@gmail.com"
console.log(userOne)
console.log(userTwo)
