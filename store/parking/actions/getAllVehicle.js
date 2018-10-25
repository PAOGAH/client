import firebase from 'firebase'
import moment from 'moment'

firebase.firestore().settings({
  timestampsInSnapshots: true
})


const db = firebase.firestore()
export default dispatch => {
  dispatch({
    type: 'REQUEST_GET_ALL_LICENSES'
  })
  db.collection('licenses').onSnapshot(snapshot => {
    let arr = []
    let totalSlotParking = 50
    let allPlatTrue = []
    let mobil = []
    let motor = []

    let dataMingguSekarang =  []

    snapshot.forEach(doc => {
      let data = doc.data()
      let potong = data.imgTrue.split('_')
      if(data.status) {
        allPlatTrue.push({
          id: doc.id,
          ...data
        })
        if(potong[potong.length-1] === 'car.jpg'){
          mobil.push({
            id: doc.id,
            ...data
          })
        } else if (potong[potong.length-1] === 'motorbike.jpg') {
          motor.push({
            id: doc.id,
            ...data
          })
        }
      } else {
        arr.push({
          id: doc.id,
          ...data
        })

        // bulan yang sama dan minggu yang sama
        if(moment(data.updatedAt).month() === new Date().getMonth() && moment(data.updatedAt).week() === moment(new Date).week()) {
          // masuk++
          dataMingguSekarang.push({
            id: doc.id,
            ...data
          })
        }
      }
    })
    totalSlotParking -= allPlatTrue.length
    dispatch({
      type: 'SUCCESS_GET_ALL_LISENCES',
      payload: {
        lisences: arr,
        allLisencesParking: allPlatTrue,
        totalEmpty: totalSlotParking,
        totalVehicle: allPlatTrue.length,
        motor,
        mobil,
        dataMingguSekarang
      }
    })
  })
}