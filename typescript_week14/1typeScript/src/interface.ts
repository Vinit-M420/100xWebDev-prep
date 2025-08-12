
interface People {
    name: string,
    age: number,
    greet: () => string
}

const person : People = {
    name: "Vin",
    age: 25,
    greet() {
        return "hello"
    },
}