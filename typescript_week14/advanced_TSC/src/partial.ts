
interface User {
    name: string,
    id: string,
    email: string,
    password: string,
    age: number
}

type UpdateProps = Pick<User , "name" | "age"| "email" >

type UpdatePartial = Partial<UpdateProps>

function updateUserDetails(newDetails: UpdatePartial){
    /// db call
}

updateUserDetails({
    name:"vinit"
})