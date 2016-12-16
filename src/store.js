import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
// Import Reducers
import rootReducer from './reducers/rootReducer'
import {LoadData} from './actions/actioncreator'
// Import Data
import posts from './data/posts'
import comments from './data/comments'
// const defaultStates = {
//   posts,
//   comments
// }
const store = createStore(rootReducer)
store.dispatch(LoadData(posts, comments))
export const history = syncHistoryWithStore(browserHistory, store)
export default store
