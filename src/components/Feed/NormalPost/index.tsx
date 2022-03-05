import { useState } from 'react'
import moment from 'moment'
import { Row, Col, Menu, Dropdown } from 'antd'
import Linkify from 'react-linkify'

import { Props } from './type'
import CREATE_LIKE_MUTATION from 'src/graphql/mutations/createLike'
import DELETE_LIKE_MUTATION from 'src/graphql/mutations/deleteLike'
import DELETE_POST from 'src/graphql/mutations/deletePost'
import CREATE_COMMENT_MUTATION from 'src/graphql/mutations/createComment'
import { useMutation } from '@apollo/client'
import MY_FEED_QUERY from 'src/graphql/queries/getMyFeed'
import { useAuth } from 'src/utils/auth'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartFillIcon } from '@heroicons/react/solid'
import { notification } from 'antd'
import { LinkPreview } from '@dhaiwat10/react-link-preview'

const regex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/
const NormalPost = ({ post, editPostHandler }: Props) => {
  const [comment, setComment] = useState('')
  const { user } = useAuth()

  const postLiked = post.likes.find((like) => like.user.id === user.id)
  const urlInPostContent = post.content.match(regex)
  console.log(urlInPostContent)

  const [createLike] = useMutation(CREATE_LIKE_MUTATION, {
    onError: (error) => {
      console.log(error)
    },
  })

  const [createComment] = useMutation(CREATE_COMMENT_MUTATION, {
    onError: (error) => {
      console.log(error)
    },
  })

  const [deleteLike] = useMutation(DELETE_LIKE_MUTATION, {
    onError: (error) => {
      console.log(error)
    },
  })

  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () => {
      notification['success']({
        message: 'Post delete successfully',
        description: 'Your post has been deleted',
      })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const deletePostHandler = () => {
    deletePost({ variables: { id: post.id }, refetchQueries: [{ query: MY_FEED_QUERY }] })
  }

  const likeHandler = () => {
    if (postLiked) {
      deleteLike({ variables: { id: postLiked.id }, refetchQueries: [{ query: MY_FEED_QUERY }] })
      return
    }
    createLike({ variables: { data: { post: post.id } }, refetchQueries: [{ query: MY_FEED_QUERY }] })
  }

  const commentHandler = () => {
    if (comment.trim().length === 0) return
    createComment({ variables: { data: { post: post.id, comment } }, refetchQueries: [{ query: MY_FEED_QUERY }] })
    setComment('')
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div className="dropdown-option">
          <div className="dropdown-icon">
            <img src="assets/img/feed/save-post.svg" />
          </div>
          <div className="dropdown-content">
            <h5>Save Post</h5>
            <p>Save this post for later</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="1" onClick={() => editPostHandler({ id: post.id, content: post.content, isEdit: true })}>
        <div className="dropdown-option">
          <div className="dropdown-icon">
            <img src="assets/img/feed/edit-post.svg" />
          </div>
          <div className="dropdown-content">
            <h5>Edit Post</h5>
            <p>Save this post for later</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="dropdown-option">
          <div className="dropdown-icon">
            <img src="assets/img/feed/share-feed.svg" />
          </div>
          <div className="dropdown-content">
            <h5>Share on my feed</h5>
            <p>Share this post on my feed</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div className="dropdown-option">
          <div className="dropdown-icon">
            <img src="assets/img/feed/share-friends.svg" />
          </div>
          <div className="dropdown-content">
            <h5>Share with Friends</h5>
            <p>Share post with friends</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="4" onClick={deletePostHandler}>
        <div className="dropdown-option">
          <div className="dropdown-icon">
            <img src="assets/img/feed/delete.svg" />
          </div>
          <div className="dropdown-content">
            <h5>Delete Post</h5>
            <p>Delete this post</p>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="post-normal-wrapper">
      <div className="post-upper">
        <div className="post-user-info">
          <div className="post-user-detail">
            <div className="post-user-avtar">
              <img src="assets/img/feed/avtar.png" />
            </div>
            <div className="post-user-meta">
              <h5>{post.user.username}</h5>
              <p>{moment(post.created_at).format('DD MMM [at] hh:mm A')}</p>
            </div>
          </div>
          {post.user.id === user.id && (
            <div className="post-user-action">
              <Dropdown overlay={menu} trigger={['click']} overlayClassName="feed-dropdown">
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  <img src="assets/img/feed/ic_More.svg" />
                </a>
              </Dropdown>
            </div>
          )}
        </div>
        <div className="post-user-desc">
          <Linkify>{post.content}</Linkify>
        </div>
        {urlInPostContent && post.attachments.length === 0 && (
          <LinkPreview url={urlInPostContent[0]} className="w-full" />
        )}
        <div className="post-user-images">
          <Row gutter={30}>
            {post.attachments.map(({ url, alternativeText, mime }) => (
              <Col span={12}>
                {mime.includes('image') ? (
                  <img src={`http://localhost:1337${url}`} alt={alternativeText} />
                ) : (
                  <video controls width="400">
                    <source src={`http://localhost:1337${url}`} id="video_here" />
                    Your browser does not support HTML5 video.
                  </video>
                )}
              </Col>
            ))}
          </Row>
        </div>
        <div className="post-action-wrapper">
          <div className="post-action">
            <img src="assets/img/feed/ic_comment.svg" />
            <p>{post.comments.length} Comments</p>
          </div>
          <div className="post-action" onClick={likeHandler}>
            {postLiked ? <HeartFillIcon fill="#92929D" /> : <HeartIcon stroke="#92929D" />}
            <p>{post.likes.length} Likes</p>
          </div>
          <div className="post-action">
            <img src="assets/img/feed/ic_Share.svg" />
            <p>231 Share</p>
          </div>
          <div className="post-action">
            <img src="assets/img/feed/ic_Saved.svg" />
            <p>12 Saved</p>
          </div>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-user-avtar">
          <img src="assets/img/feed/avtar.png" />
        </div>
        <div className="post-comment">
          <div className="post-comment-box">
            <input
              type="text"
              placeholder="Write your comment…"
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.code === 'Enter') {
                  commentHandler()
                }
              }}
              value={comment}
            />
            <div className="actions">
              <img src="assets/img/feed/ic_Emoticon.svg" />
              <img src="assets/img/feed/ic_Image.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="post-comments-wrapper">
        {post.comments
          .map((comment) => (
            <div className="post-user-comments">
              <div className="post-user-avtar">
                <img src="assets/img/feed/avtar.png" />
              </div>
              <div className="post-user-comment">
                <h4>
                  {comment.user.username} <span className="time">8h ago</span>
                </h4>
                <p>{comment.comment}</p>
                <ul className="post-comments-actions">
                  <li>Like</li>
                  <li>Reply</li>
                </ul>
              </div>
            </div>
          ))
          .reverse()}
        <div className="more-comments">
          <img src="assets/img/feed/more-comments.svg" />
          <p>More comments</p>
        </div>
      </div>
    </div>
  )
}

export default NormalPost
