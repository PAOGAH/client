export default (license) => {
  return dispatch => {
    // alert(JSON.stringify(license))
    dispatch({
      type: 'SEARCH_LICENSE',
      payload: {
        license
      }
    })
  }
}