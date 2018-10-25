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
          arr.push({
            ...doc.data(),
            updatedAt: new Date(doc.data().updatedAt)
          })
        })

        for(let i = 0; i < arr.length; i++) {
          let tmp = arr[i]
          if(val === 'asc') {
            if(i + 1 <= arr.length-1) {
              if(arr[i].updatedAt > arr[i+1].updatedAt) {
                arr[i] = arr[i+1]
                arr[i+1] = tmp
                i=-1
              }
            }
          } else if(val === 'desc') {
            if(i + 1 <= arr.length-1) {
              if(arr[i].updatedAt < arr[i+1].updatedAt) {
                arr[i] = arr[i+1]
                arr[i+1] = tmp
                i=-1
              }
            }
          }
        }
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