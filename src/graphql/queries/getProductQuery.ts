import { gql } from '@apollo/client'

export default gql`
  query GET_PRODUCT_PAGE_QUERY($id: ID!) {
    product(id: $id) {
      id
      description
      features
      price
      title
      quantity
      images {
        url
        alternativeText
      }
      store {
        id
        businessInformation {
          name
        }
        profileImage {
          url
          alternativeText
        }
      }
    }
  }
`
