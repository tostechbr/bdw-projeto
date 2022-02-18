import { createContext, ReactNode, useState } from "react";

interface Props {
    children: ReactNode
}

interface UserProps {
    nome: string
    senha: string
    email: string
    setNome: (value: string) => void
    setEmail: (value: string) => void
    setSenha: (value: string) => void
}

const user:any = null

export const UserContext = createContext(user as UserProps)

export function UserProvider({children}:Props) {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    
    const ProviderUser = {
        nome,
        senha,
        email,
        setNome,
        setSenha,
        setEmail
    }
    return(
        <UserContext.Provider value={ProviderUser}>
            {children}
        </UserContext.Provider>
    )
}