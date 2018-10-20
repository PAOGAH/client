import firebase from 'react-native-firebase';

export default dispatch => {
    console.log(`masuk`)
    firebase
        .firestore()
        .collection('licenses')
        .get()
        .then((snapshot) => {
            let totalSlotParking = 50
            let arr = []
            let allPlatTrue = []

            snapshot.forEach((doc) => {
                let data = doc.data()
                if(data.status) {
                    allPlatTrue.push({
                        id: doc.id,
                        ...data
                    })
                }
                arr.push({
                    id: doc.id,
                    ...data
                })
            })
            
            totalSlotParking -= (allPlatTrue.length)
            console.log(totalSlotParking)
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
        .catch(err => {
            console.log(err);
        });
    // console.log(1)
    // firebase.firestore().collection('users').get().then(snapshot => {
    //     console.log(2)
    //     snapshot.forEach(doc => {
    //         console.log(doc.data())
    //     })
    // })
    // .catch(err => {
    //     console.log(err)
    // })
}