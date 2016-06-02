//increment
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comments
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comments
function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
