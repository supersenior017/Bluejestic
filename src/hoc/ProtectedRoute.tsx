import { useRouter } from 'next/router'
import { useAuth } from 'src/utils/auth'

const ProtectedRoute = (ProtectedComponent) => {
  return (props) => {
    const { user, loading } = useAuth()
    const router = useRouter()
    if (loading) {
      return <p>Loading...</p>
    } else if (!user) {
      router.replace('/')
      return null
    } else {
      return <ProtectedComponent {...props} />
    }
  }
}

export default ProtectedRoute
