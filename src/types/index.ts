export type User = {
  id: string
  username: string
  email: string
  friends: Friend[]
  profileImage: ImageNode
  address: string
  bday: string
  relationshipStatus: string
  website: string
  gender: string
  joined: string
  jobTitle: string
  events: string
  about: string
  hobbies: string
  education: string
  otherInterests: string
  workExperience: string
}

export type Friend = {
  id: string
  user: User
  connectedAt: string | null
  requestedByMe: boolean
}

export type Comment = {
  id: string
  user: {
    id: string
    username: string
  }
  comment: string
}

export type Like = {
  id: string
  user: {
    id: string
  }
}

export type Attachments = {
  url: string
  alternativeText: string
  mime?: string
}

export type Post = {
  id: string
  content: string
  attachments: Attachments[]
  user: {
    id: string
    username: string
  }
  comments: Comment[]
  likes: Like[]
  created_at: string
}

export type ImageNode = {
  alternativeText: string
  url: string
}

export type Category = {
  id: string
  name: string
  description: string
  color: string
  image: ImageNode
}

export type IStore = {
  id: string
  name: string
  description: string
  location: string
  isPopular: boolean
  isActive: boolean
  profileImage: ImageNode
  coverImage: ImageNode
  businessInformation: {
    name: string
  }
}

export type Product = {
  id: string
  price: string
  quantity: string
  images: ImageNode[]
  title: string
  description: string
  features: string
  store: IStore
}
