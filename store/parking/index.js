let initialParking = {
  allLisences: [],
  allLisencesParking: [],
  totalVehicle: 0,
  totalEmpty: 50,
  searchLicense: [],
  loadingGetLicenses: false,
  motor: [],
  mobil: [],
  dataPerWeek: []
}

function parking(state = initialParking, action) {
  switch (action.type) {
      case 'SUCCESS_GET_ALL_LISENCES':
          return {
              ...state,
              allLisences: action.payload.lisences,
              allLisencesParking: action.payload.allLisencesParking,
              totalEmpty: action.payload.totalEmpty,
              totalVehicle: action.payload.totalVehicle,
              loadingGetLicenses: false,
              motor: action.payload.motor,
              mobil: action.payload.mobil,
              dataPerWeek: action.payload.dataMingguSekarang
          }
      case 'REQUEST_GET_ALL_LICENSES':
          return {
              ...state,
              loadingGetLicenses: true
          }
      case 'SEARCH_LICENSE':
          return {
              ...state,
              searchLicense: action.payload.license
          }
      case 'GET_SORTING_HISTORY_DATA':
          return {
              ...state,
              allLisences: action.payload
          }
      case 'GET_SORTING_PARKING_DATA':
          return {
              ...state,
              allLisencesParking: action.payload
          }
      default:
          return state
  }
}

export default parking