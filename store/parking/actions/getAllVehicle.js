import db from '../../../config'
export default dispatch => {
    db.ref('/plat').on('value', snapshot => {
        let totalSlotParking = 50
        let arr = []
        let allPlatTrue = []
        snapshot.forEach(platNomor => {
            if(platNomor.val().status) {
                allPlatTrue.push({
                    id: platNomor.key,
                    ...platNomor.val()
                })
            }
            arr.push({
                id: platNomor.key,
                ...platNomor.val()
            })
        })

        totalSlotParking-= (allPlatTrue.length+1)

        dispatch({
            type: 'GET_ALL_PLAT',
            payload: {
                allPlat: arr,
                allPlatTrue: allPlatTrue,
                totalSlotParking,
                totalVehicle: allPlatTrue.length+1
            }
        })
    })
}