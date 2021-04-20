let INITIAL_STATE = {
    storesList: [],
    selectedStore: null,
    store_location: [0, 0]
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'GET_STORES') {
        return { ...state, storesList: action.payload }
    }

    if (action.type === 'GET_STORE') {
        return { ...state, selectedStore: action.payload }
    }

    if(action.type === 'STORE_LOCATION'){
        return {...state, store_location: {"lat": action.payload.lat, "lng":action.payload.lng}}
    }

    return state
}