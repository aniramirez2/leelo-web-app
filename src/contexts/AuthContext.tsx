import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import Router from "next/router"


type User = {
  name: string,
  email: string,
  phone: string,
  address: string,
  pass: string,
}

type AuthContextType = {
  isAuthenticated: boolean,
  singIn: () => Promise<void>,
  user: User | undefined
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}: any) {
  const [user, setUser] = useState<User | undefined>()
  const isAuthenticated = !!user;

  async function singIn() {
    const token = '';
    const userData = {} as User;

    setCookie(undefined, 'leeloauth.token', token, {
     maxAge: 60 * 60 * 2 // 2 hours 
    })

    setUser(userData)

    Router.push('/dashboard')
  }

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
  }, [])

  return (
    <AuthContext.Provider value={{isAuthenticated, singIn, user}}>
      {children}
    </AuthContext.Provider>
  )
}