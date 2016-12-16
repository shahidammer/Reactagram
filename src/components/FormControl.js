import React from 'react'

const Form_Control = (props) => {
  return (
    <div className='Form_Control'>
      <LikeButton onClick={props.onClick_Like} postId={props.postId} />
      <CommentButton onClick={props.onClick_Comment} postCode={props.postCode} />
    </div>
  )
}
const LikeButton = (props) => {
  return (
    <div className='Form_Control-Like'>
      <button onClick={e => {
        e.preventDefault()
        console.log(props.postId)
        props.onClick(props.postId)
      }} >&#9829;</button> {/* OnClick = IncreamentLikes */}
    </div>
  )
}
const CommentButton = (props) => {
  let input
  return (
    <div className='Form_Control-Comment'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.onClick(input.value, props.postCode)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} placeholder='  Enter you comment...' />
      </form>
    </div>
  )
}
Form_Control.propTypes = {
  onClick_Comment: React.PropTypes.func,
  onClick_Like: React.PropTypes.func
}
export default Form_Control
