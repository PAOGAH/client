let initialParking = {
    allPlat: [],
    allPlatParking: [],
    totalVehicle: 0,
    totalEmpty: 50
}

function parking(state = initialParking, action) {
    switch (action.type) {
        case 'GET_ALL_PLAT':
            return {
                ...state,
                allPlat: action.payload.allPlat,
                allPlatParking: action.payload.allPlatTrue,
                totalEmpty: action.payload.totalSlotParking,
                totalVehicle: action.payload.totalVehicle
            }
        default:
            return state
    }
}


export default parking