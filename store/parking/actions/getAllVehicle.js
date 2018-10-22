import firebase from 'firebase'
const db = firebase.firestore()
export default dispatch => {
  db.collection('licenses').onSnapshot(snapshot => {
    let arr = []
    let totalSlotParking = 50
    let allPlatTrue = []
    snapshot.forEach(doc => {
      let data = doc.data()
      if(data.status) {
        allPlatTrue.push(data)
      }
      arr.push({
        id: doc.id,
        ...data
      })
    })
    totalSlotParking -= allPlatTrue.length

    dispatch({
      type: 'GET_ALL_LISENCES',
      payload: {
        lisences: arr,
        allLisencesParking: allPlatTrue,
        totalEmpty: totalSlotParking,
        totalVehicle: allPlatTrue.length
      }
    })
  })
}