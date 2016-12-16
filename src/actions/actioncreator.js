export const LoadData = (post, comment) => ({
  type: 'POPULATE_DATA',
  post,
  comment
})
// increament likes
export const increatment = (postCode) => {
  console.log('Increameant Likes: ', postCode)
  return {
    type: 'INCREAMENT_LIKES',
    postcode: postCode
  }
}
// add comment
export const addComment = (comment, code) => {
  console.log('Comment is: ' + comment + ' Code:', code)
  return {
    type: 'ADD_COMMENT'
  }
}
// remove comment
export const removeComment = (postId, index) => ({
  type: 'REMOVE-COMMENT',
  postId,
  index
})
