let initialParking = {
  allLisences: [],
  allLisencesParking: [],
  totalVehicle: 0,
  totalEmpty: 50,
  searchLicense: []
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
      case 'SEARCH_LICENSE':
          return {
              ...state,
              searchLicense: action.payload.license
          }
      default:
          return state
  }
}

export default parking