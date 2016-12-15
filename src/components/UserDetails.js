import React from 'react'

const UserInfo = (props) => {
  const {post} = props
  return (
    <div className='UserInfo'>
      <Avatar image={post.display_src} />
      <Username username={post.code}/>
    </div>
  )
}
const Avatar = (props) => {
  return (
    <div className = 'UserInfo-Avatar'>
      <img src={props.image} alt='Image not Found'/>
    </div>
  )
}
const Username = (props) => {
  return (
    <div className = 'UserInfo-Username'>
      <p>{props.username}</p>
    </div>
  )
}

export default UserInfo
