let INITIAL_STATE = {
    storesList: [],
    selectedStore: null,
    store_location: {"lat": 0, "lng": 0}
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'GET_STORES') {
        return { ...state, storesList: action.payload }
    }

    if (action.type === 'GET_STORE') {
        return { ...state, selectedStore: action.payload }
    }

    if(action.type === 'STORE_LOCATION'){
        console.log("ACTION!", action.payload)
        return {...state, store_location: {"lat": action.payload.lat, "lng":action.payload.lng}}
    }

    return state
}