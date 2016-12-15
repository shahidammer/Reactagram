import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from '../components/Main'
import * as myActionCreators from '../actions/actioncreator.js'

const mapStateToProps = (state) => ({
  posts: state.posts,
  comment: state.comments
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(myActionCreators, dispatch)
)

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
