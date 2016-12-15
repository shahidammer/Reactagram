// increament likes
export const increatment = (index) => ({
  type: 'INCR_LIKES',
  index
})
// add comment
export const addComment = (postId, author, comment) => ({
  type: 'ADD-COMMENT',
  postId,
  author,
  comment
})
// remove comment
export const removeComment = (postId, index) => ({
  type: 'REMOVE-COMMENT',
  postId,
  index
})
