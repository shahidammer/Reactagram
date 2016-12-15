import React, { Component } from 'react'
import UserInfo from './UserDetails'
import Single from './Single'

export default class Post extends Component {
  render () {
    const {posts} = this.props
    return (
      <div className='App'>
        <div className='container'>
          <div className='row flex'>
                <div className='row' id='grid'>
                  {
                    posts.map((post, i) => {
                      return (
                        <div key={i}>
                          <UserInfo post={post} index={i} />
                          <Single post={post}/>

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
