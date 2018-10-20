let initialParking = {
    allLisences: [],
    allLisencesParking: [],
    totalVehicle: 0,
    totalEmpty: 50
}

function parking(state = initialParking, action) {
    switch (action.type) {
        case 'GET_ALL_LISENCES':
            return {
                ...state,
                allLisences: action.payload.lisences,
                allLisencesParking: action.payload.allLisencesParking,
                totalEmpty: action.payload.totalEmpty,
                totalVehicle: action.payload.totalVehicle
            }
        default:
            return state
    }
}

export default parking