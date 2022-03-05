import { gql } from '@apollo/client'

const UPLOAD_FILE = gql`
  mutation ($refId: ID, $ref: String, $field: String, $source: String, $files: [Upload]!) {
    multipleUpload(refId: $refId, ref: $ref, field: $field, source: $source, files: $files) {
      url
    }
  }
`

export default UPLOAD_FILE
