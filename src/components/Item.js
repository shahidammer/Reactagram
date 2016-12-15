import React, { Component } from 'react'
export default class Items extends Component {
  render () {
    const { post, comment } = this.props
    const Keys = Object.keys(comment)
    let num_comments
    Keys.filter((key) => {
      if (post.code === key) {
        num_comments = comment[key].map((com) => com).length
      }
      return 0
    })
    return (
      <div className='col-sm-8 col-sm-offset-2'>
        <img className='img-thumbnail img-responsive' src={post.display_src} alt={post.caption}></img>
        <p>{post.caption}</p>
        <div id='BtnGroup'>
          <button id='likeBtn'>&#9829; {post.likes}</button>
          <button id='commentBtn'>&#10020; {num_comments > 0 ? num_comments : 0}</button>
        </div>
      </div>
    )
  }
}
Items.propTypes = {
  post: React.PropTypes.object,
  comment: React.PropTypes.object
}
