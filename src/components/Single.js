import React from 'react'
import { Link } from 'react-router'

const Single = (props) => {
  const { post } = props
  return (
    <div className='Post'>
      <Post_Image image={post.display_src} />
      <Form_Control />
      <LikesCount likes={post.likes} />
      <Post_Caption caption={post.caption} username={post.code} />
      <Post_viewComment comments={2} />

    </div>
  )
}
const LikesCount = (props) => {
  return (
    <div className='LikeCount'>
      <p>&#9829; <small>{props.likes}</small></p>
    </div>
  )
}
const Post_Image = (props) => {
  return (
    <div className = 'Post-Image'>
      <img src={props.image} alt='Image not Found' />
    </div>
  )
}
const Form_Control = (props) => {
  return (
    <div className = 'Post-Form'>
      <button>&#9829;</button>
      <button>&#9869;</button>
      <button>&#9889;</button>
    </div>
  )
}
const Post_Caption = (props) => {
  return (
    <div className = 'Post-Caption'>
      <p>
        <span className='Post-Caption-UserName'>{props.username}:</span> {props.caption}
      </p>
    </div>
  )
}
const Post_viewComment = (props) => {
  return (
    <div className = 'Post-viewComment'>
      <Link>
        <p> view all {props.comments} comments </p>
      </Link>
    </div>
  )
}
export default Single
