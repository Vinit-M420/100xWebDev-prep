// interface User {
//     id:string, name:string 
// }

// type Users {
//     [key: string] : User
// }

type Users = Record< string, {id: string, name:string} >

const users : Users = {
    "hahd1": {id: 'hahd1', name: "Susan"},
    "hahd2": {id: 'hahd2', name: "Johnny"}
}