
interface User  {
    name: string,
    age: number
}

function sumOfAges (user1: User, user2: User){
    return (user1.age + user2.age);
}

const age = sumOfAges({name:"Ben", age:15}, {name: "Reed", age:14})
console.log(age);