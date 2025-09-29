
interface User {
    name: string,
    id: string,
    email: string,
    password: string,
    age: number
}

type UpdateProps = Pick<User , "name" | "age"| "email" >

function updateUserDetails(newDetails: UpdateProps){
    //
}