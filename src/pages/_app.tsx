import { ApolloProvider } from '@apollo/client'
import client from 'src/utils/apolloClient'
import { AuthProvider } from 'src/utils/auth'

import 'public/assets/fonts/Linearicons/Font/demo-files/demo.css'
import 'public/assets/fonts/font-awesome/css/font-awesome.min.css'
import 'public/styles/css/bootstrap.min.css'
import 'public/styles/css/slick.min.css'

import 'public/styles/scss/style.scss'
import 'tailwindcss/tailwind.css'
import 'public/styles/scss/custom.scss'

function MyApp({ Component, pageProps }) {
  return (
    
    <AuthProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
    
  )
}

export default MyApp
