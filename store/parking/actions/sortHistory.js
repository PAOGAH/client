import firebase from 'firebase'
export default (val) => {
  return dispatch => {
    firebase.firestore()
      .collection('licenses')
      .where('status', '==', false)
      .orderBy('updatedAt', val)
      .get()
      .then(snapshot => {
        let arr = []
        snapshot.forEach(doc => {
          arr.push(doc.data())
        })
        dispatch({
          type: 'GET_SORTING_HISTORY_DATA',
          payload: arr
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}