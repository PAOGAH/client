import firebase from 'firebase'

firebase.firestore().settings({
  timestampsInSnapshots: true
})


const db = firebase.firestore()
export default dispatch => {
  dispatch({
    type: 'REQUEST_GET_ALL_LICENSES'
  })
  db.collection('licenses').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    let arr = []
    let totalSlotParking = 50
    let allPlatTrue = []
    snapshot.forEach(doc => {
      let data = doc.data()
      if(data.status) {
        allPlatTrue.push(data)
      } else {
        arr.push({
          id: doc.id,
          ...data
        })

      }
    })
    totalSlotParking -= allPlatTrue.length

    dispatch({
      type: 'SUCCESS_GET_ALL_LISENCES',
      payload: {
        lisences: arr,
        allLisencesParking: allPlatTrue,
        totalEmpty: totalSlotParking,
        totalVehicle: allPlatTrue.length
      }
    })
  })
}