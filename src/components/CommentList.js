import React from 'react'

const CommentList = (props) => {
  const {comments} = props
  if (comments === undefined) {
    return <p> </p>
  }
  const comArr = Array.from(comments)
  return (
    <div className='CommentList'>
      {
        comArr.map((comment, index) => {
          return (
            <div key={index}>

              <p>
                <span className='CommentList-userName'>
                  {comment.user}:
                </span>
                {' ' + comment.text}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}
CommentList.propTypes = {
  comments: React.PropTypes.array
}
export default CommentList
