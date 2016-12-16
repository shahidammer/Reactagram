import { fromJS, List, Map } from 'immutable'
const defaults = Map({
  posts: List(),
  comments: List()
})
const comments = (state = defaults, action) => {
  switch (action.type) {
    case 'POPULATE_DATA':
      return state.set('comments', action.comment)
    case 'ADD_COMMENT':
      // fromJS(action.comment)
    default:
      return state
  }
}
export default comments
