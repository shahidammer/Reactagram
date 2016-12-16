import React from 'react'

const UserInfo = (props) => {
  const {post} = props
  return (
    <div className='UserInfo'>
      <Avatar imageURL={post.display_src} />
      <Username username={post.code}/>
    </div>
  )
}
const Avatar = (props) => {
  return (
    <div className='UserInfo-Avatar'>
      <img src={props.imageURL} alt='not Found'/>
    </div>
  )
}
const Username = (props) => {
  return (
    <div className='UserInfo-Username'>
      <p>{props.username}</p>
    </div>
  )
}
UserInfo.propTypes = {
  post: React.PropTypes.object
}
Avatar.propTypes = {
  imageURL: React.PropTypes.string
}
Username.propTypes = {
  username: React.PropTypes.string
}
export default UserInfo
