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
  db.collection('licenses').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
        allPlatTrue.push(data)
        if(potong[potong.length-1] === 'car.jpg'){
          mobil.push(data)
        } else if (potong[potong.length-1] === 'motorbike.jpg') {
          motor.push(data)
        }
      } else {
        arr.push({
          id: doc.id,
          ...data
        })

        // bulan yang sama dan minggu yang sama
        if(moment(data.updatedAt).month() === new Date().getMonth() && moment(data.updatedAt).week() === moment(new Date).week()) {
          // masuk++
          dataMingguSekarang.push(data)
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