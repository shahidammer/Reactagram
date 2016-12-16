import { connect } from 'react-redux'
import Main from '../components/Main'
import { addComment, increatment } from '../actions/actioncreator'

const mapStateToProps = ({posts, comments}) => ({
  posts: posts.get('posts'),
  comments: comments.get('comments')
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick_Comment: (comment, postCode) => {
    dispatch(addComment(comment, postCode))
  },
  onClick_Like: (ownProps) => {
    dispatch(increatment(ownProps))
  }
})

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default ListContainer
