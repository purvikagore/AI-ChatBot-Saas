import { create } from '@mui/material/styles/createTransitions'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
// Kaun use karega with login wihout login sign in sign up kab ayega

type User = {
    name: string 
    email: string
}

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>
    signup: (name: string, email: string, password: string) => Promise<void>
    logout:()=>Promise<void>
}

const AuthContext = createContext<UserAuth | null>(null)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        // fetch is user cookies are valid then skip login
    },[])
        const login = async (email: string, password: string) => { }
        const signup = async (email: string,name:string, password: string) => { }
        const logout = async () => { }

        const value = {
            user,
            isLoggedIn,
            login,
            logout,
            signup,
        }

        return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
   
}

export const useAuth = ()=> useContext(AuthContext)