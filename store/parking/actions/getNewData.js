export default data => {
  return dispatch => {
    let totalSlotParking = 50
    totalSlotParking -= data.newAllPlatTrue.length

    dispatch({
      type: 'GET_ALL_LISENCES',
      payload: {
        lisences: data.newData,
        allLisencesParking: data.newAllPlatTrue,
        totalEmpty: totalSlotParking,
        totalVehicle: data.newAllPlatTrue.length
      }
    })
  }
}