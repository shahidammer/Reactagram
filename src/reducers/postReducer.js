import { fromJS, List, Map } from 'immutable'
const defaults = Map({
  posts: List(),
  comments: List()
})
const posts = (state = defaults, action) => {
  switch (action.type) {
    case 'POPULATE_DATA':
      return state.set('posts', action.post)
    case 'INCREAMENT_LIKES':
      return updateLikes(state, action.postcode)
    default:
      return state
  }
}

const updateLikes = (state, postId) => {
  const temp = state.getIn(['posts', 0, 'likes'], 23)
  console.log('Wows', temp)
  const likeCount = temp.map((item, index) => {
    if(item.id === postId) {
      state.setIn(['post', index, 'likes'], 0)
      console.log(  state.getIn(['posts', index, 'likes']))
    }
  })
}
export default posts
