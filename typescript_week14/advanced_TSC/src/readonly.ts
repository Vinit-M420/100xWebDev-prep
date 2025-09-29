
interface User {
    readonly name: string; 
    readonly age: number
}

// const obj: Readonly<User> = {
//     name: "Ben", age: 25
// }

const obj: User = {
    name: "Ben", age: 25
}

// obj.name = "Johnny" 
//cant update because it's only readonly property