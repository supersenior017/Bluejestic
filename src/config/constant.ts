export const GRAPHQL_SERVER_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  : 'http://localhost:1337/graphql'
export const SERVER_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
