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
    let mobil = []
    let motor = []
    snapshot.forEach(doc => {
      let data = doc.data()
      let potong = data.imgTrue.split('_')
      if(data.status) {
        allPlatTrue.push(data)
        if(potong[potong.length-1] === 'car.jpg'){
          mobil.push(data)
        } else if (potong[potong.length-1] === 'motorbike.jpg') {
          motor.push(data)
        }
        // alert(JSON.stringify(potong))
      } else {
        arr.push({
          id: doc.id,
          ...data
        })
      }
    })
    totalSlotParking -= allPlatTrue.length
    // alert(JSON.stringify(mobil))
    dispatch({
      type: 'SUCCESS_GET_ALL_LISENCES',
      payload: {
        lisences: arr,
        allLisencesParking: allPlatTrue,
        totalEmpty: totalSlotParking,
        totalVehicle: allPlatTrue.length,
        motor,
        mobil
      }
    })
  })
}