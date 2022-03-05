import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { Menu, Dropdown, notification } from 'antd'
import CREATE_POST_MUTATION from 'src/graphql/mutations/createPost'
import UPDATE_POST_MUTATION from 'src/graphql/mutations/updatePost'
import { useMutation } from '@apollo/client'
import MY_FEED_QUERY from 'src/graphql/queries/getMyFeed'
import FileUpload from 'src/components/FileUpload'
import UPLOAD_FILE_MUTATION from 'src/graphql/mutations/uploadFile'

type Props = {
  editPost?: {
    isEdit: boolean
    id: string
    content: string
  }
  editPostHandler?: (post: { id: string; content: string; isEdit: boolean }) => void
}

const PostSomething: React.FC<Props> = ({ editPost, editPostHandler }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [postContent, setPostContent] = useState(editPost.content || '')
  const [postImage, setPostImage] = useState(false)
  const postImageVideo = () => setPostImage(true)
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  })

  const updateUploadedFiles = (files) => setNewUserInfo({ ...newUserInfo, profileImages: files })

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: (res) => {
      notification['success']({
        message: 'Post created successfully',
        description: 'Your post has been created successfully',
      })
      handleCancel()
      setPostContent('')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const [upload] = useMutation(UPLOAD_FILE_MUTATION, {
    onCompleted: (res) => {
      console.log(`res`, res)
      setNewUserInfo({
        profileImages: [],
      })
      console.log(res)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const [editPostMutation] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      notification['success']({
        message: 'Post deleted successfully',
        description: 'Your post has been deleted successfully',
      })
      handleCancel()
      setPostContent('')
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    editPostHandler({ isEdit: false, content: null, id: null })
  }

  useEffect(() => {
    if (editPost.isEdit) {
      setIsModalVisible(true)
      setPostContent(editPost.content)
    }
  }, [editPost.isEdit])

  const postHandler = async () => {
    if (postContent) {
      if (editPost.isEdit) {
        return editPostMutation({
          variables: { id: editPost.id, content: postContent },
          refetchQueries: [{ query: MY_FEED_QUERY }],
        })
      }
      const post = await createPost({
        variables: { content: postContent },
        refetchQueries: [{ query: MY_FEED_QUERY }],
      })

      const postId = post.data.createPost.post.id

      console.log(`newUserInfo.profileImages`, newUserInfo.profileImages)

      if (postId && newUserInfo.profileImages.length > 0) {
        upload({
          variables: { refId: postId, ref: 'Posts', field: 'Attachments', files: newUserInfo.profileImages },
          refetchQueries: [{ query: MY_FEED_QUERY }],
        })
      }
    }
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Friends</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Groups</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="post-something-wrapper">
      <div className="title-wrapper">
        <h4>Post Something</h4>
      </div>
      <div className="post-wrapper">
        <div className="user-avtar">
          <img src="assets/img/feed/avtar.png" />
        </div>
        <div className="post-input" onClick={showModal}>
          <input type="text" placeholder="What’s on your mind?" />
        </div>
      </div>
      <Modal
        title="Post Something"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={625}
        wrapClassName="post-something-modal"
        closeIcon={<img src="assets/img/feed/ic_Close.svg" />}
      >
        <div className="post-wrapper">
          <div className="user-avtar">
            <img src="assets/img/feed/avtar.png" />
          </div>
          <div className="post-input" onClick={showModal}>
            <textarea
              className="form-control"
              placeholder="What’s on your mind?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
        </div>

        {postImage ? (
          <div>
            <form className="post-image-wrapper">
              <FileUpload multiple updateFilesCb={updateUploadedFiles} />
            </form>
          </div>
        ) : null}

        <div className="post-footer-wrapper">
          <div className="post-footer-left">
            <ul>
              <li onClick={postImageVideo}>
                <img src="assets/img/feed/ic_Image.svg" />
              </li>
              <li>
                <img src="assets/img/feed/ic_Emoticon.svg" />
              </li>
              <li>
                <img src="assets/img/feed/ic_GIF.svg" />
              </li>
              <li>
                <img src="assets/img/feed/ic_Polling.svg" />
              </li>
            </ul>
            <div className="visible-for">
              <p>Visible for</p>
              <Dropdown overlay={menu} trigger={['click']} overlayClassName="post-dropdown-menu">
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  Friends
                  <img src="assets/img/feed/purple-arrow.svg" alt="down arrow" />
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="post-footer-right">
            <button onClick={postHandler}>{editPost.isEdit ? 'Edit Post' : 'Share Post'}</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PostSomething
