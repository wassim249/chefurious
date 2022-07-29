import { createContext, useState, Context , ReactNode } from "react";
import {User} from '../types/user'

const UserContext  = createContext(null)
type UserContextType = {
    children: ReactNode
}
export = ({children} : UserContextType) => {
    const UserContextProvider = UserContext.Provider

    const [user, setUser] = useState(null)
    return (
       <UserContextProvider>
       </UserContextProvider>
     

    )
}



