import React, { Component } from 'react'
import Single from './Single'

export default class Post extends Component {
  render () {
    const {posts} = this.props
    return (
      <div className='App'>
        <div className='container'>
          <div className='row flex'>
                <div className='row'>
                  {
                    posts.map((post, i) => {
                      return (
                        <div className='InstaPost' key={i}>
                          <Single {...this.props} post={post}/>
                        </div>
                      )
                    }
                  )
                  }
                </div>
             </div>
        </div>
      </div>
    )
  }
}
Post.propTypes = {
  posts: React.PropTypes.array
}
