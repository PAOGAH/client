import firebase from 'firebase'
export default val => {
  return dispatch => {
    firebase.firestore()
      .collection('licenses')
      .where('status', '==', true)
      .orderBy('createdAt', val)
      .onSnapshot(snapshot => {
        // alert(val)
        let arr = []
        snapshot.forEach(doc => {
          arr.push({
            id: doc.id,
            ...doc.data()
          })
        })

        for(let i = 0; i < arr.length; i++) {
          let tmp = arr[i]
          if(val === 'asc') {
            if(i + 1 <= arr.length-1) {
              if(new Date(arr[i].createdAt) > new Date(arr[i+1].createdAt)) {
                arr[i] = arr[i+1]
                arr[i+1] = tmp
                i=-1
              }
            }
          } else if(val === 'desc') {
            if(i + 1 <= arr.length-1) {
              if(new Date(arr[i].createdAt) < new Date(arr[i+1].createdAt)) {
                arr[i] = arr[i+1]
                arr[i+1] = tmp
                i=-1
              }
            }
          }
        }
        // alert(new Date())
        dispatch({
          type: 'GET_SORTING_PARKING_DATA',
          payload: arr
        })
        // alert(JSON.stringify(arr))
      })
  }
}