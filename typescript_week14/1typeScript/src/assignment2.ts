
interface User {
    firstName: string,
    lastName: string,
    age: number
}

function legalUsers( users: User[] ) {
    return users.filter(x => x.age >= 18)
}

console.log(legalUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));