import { Post } from 'src/types'

export interface Props {
  post: Post
  editPostHandler: (post: { id: string; content: string; isEdit: boolean }) => void
}
