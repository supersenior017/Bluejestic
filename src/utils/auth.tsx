import { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import GET_CURRENT_USER from 'src/graphql/queries/getCurrentUser'
import client from 'src/utils/apolloClient'
import { User } from 'src/types'

type ContextProps = {
  loading: boolean
  user: User | null
  updateUser: (user) => void
}

const AuthContext = createContext<Partial<ContextProps>>({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const updateUser = (user) => {
    setUser(user)
  }

  useEffect(() => {
    async function getcurrentUserData() {
      const { token } = nookies.get()

      if (!token) {
        setUser(null)
        nookies.set(undefined, 'token', '', {
          path: '/',
        })
        setLoading(false)
        return
      }
      try {
        const {
          data: { currentUser },
        } = await client.query({
          query: GET_CURRENT_USER,
        })

        if (currentUser) {
          setUser(currentUser)
          setLoading(false)
        } else {
          setUser(null)
          nookies.set(undefined, 'token', '', {
            path: '/',
          })
          setLoading(false)
          return
        }
      } catch (error) {
        setUser(null)
        nookies.set(undefined, 'token', '', {
          path: '/',
        })
        setLoading(false)
      }
    }

    getcurrentUserData()
  }, [])

  return <AuthContext.Provider value={{ user, loading, updateUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
