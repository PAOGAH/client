export default (license) => {
  return dispatch => {
    dispatch({
      type: 'SEARCH_LICENSE',
      payload: {
        license
      }
    })
  }
}