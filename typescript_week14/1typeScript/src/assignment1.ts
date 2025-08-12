
type User = {
    name: string;
    age: number
}

type Admin = {
    name: string;
    permission: string
}

function greet(person: User | Admin) {
    return "Welcome " + person.name;
}

const obj : Admin ={
    name: "Vinit",
    permission: "headada"
} 
console.log(greet(obj));