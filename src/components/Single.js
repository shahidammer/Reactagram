import React from 'react'
import UserInfo from './UserDetails'
import FormControl from './FormControl'
import CommentList from './CommentList'
const Single = (props) => {
  const { post, comments } = props
  const commentArray = comments[post.code]
  return (
    <div className='Post'>
      <UserInfo post={post} />
      <PostImage imageURL={post.display_src} />
      <LikesCount likes={post.likes} />
      <PostCaption caption={post.caption} username={post.code} />
      <CommentList comments={commentArray} />
      <FormControl onClick_Comment={props.onClick_Comment}
        onClick_Like={props.onClick_Like} postId={post.id} postCode={post.code}/>

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
const PostImage = (props) => {
  return (
    <div className='Post-Image'>
      <img src={props.imageURL} alt='not Found' />
    </div>
  )
}

const PostCaption = (props) => {
  return (
    <div className='Post-Caption'>
      <p>
        <span className='Post-Caption-UserName'>{props.username}:</span> {props.caption}
      </p>
    </div>
  )
}

Single.propTypes = {
  post: React.PropTypes.object,
  comments: React.PropTypes.object,
  onClick_Comment: React.PropTypes.func,
  onClick_Like: React.PropTypes.func
}
LikesCount.propTypes = {
  likes: React.PropTypes.number
}
PostImage.propTypes = {
  imageURL: React.PropTypes.string
}
PostCaption.propTypes = {
  username: React.PropTypes.string,
  caption: React.PropTypes.string
}
export default Single
