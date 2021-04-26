import rails from '../api/Rails'

//AUTH

export const signIn = (userInfo) => async dispatch => {
    const response = await rails.post('/login', { shopper: userInfo })
    let data = response.data
    localStorage.setItem('shopper_token', data.jwt)
    console.log(data.shopper.data.attributes)
    dispatch({
        type: 'SIGN_IN',
        payload: data.shopper.data.attributes
    })
}

export const signOut = () => {
    localStorage.removeItem('shopper_token')
    return {
        type: 'SIGN_OUT'
    }
}

// STORES 

export const getStores = () => async dispatch => {
    try{
        let response = await rails.get('/stores')
        dispatch({ type: 'GET_STORES', payload: response.data.data })
    } catch (error){
        console.log(error)
    }
}

export const getStore = (id) => async() => {
    try{
        let response = await rails.get(`/stores/${id}`)
        return response.data
    } catch (error){
        console.log(error)
    }
}

// ORDERS

export const acceptOrder = (orderId, address, orderItems, order_count, unit_count, store_name)=> {
    return { 
        type: "ACCEPT_ORDER", 
        payload: {
            orderId: orderId.toString(),
            address: address,
            orderItems: orderItems,
            order_count: order_count,
            unit_count: unit_count,
            store_name: store_name
        }
    }
}

export const startOrder = () => {
    return {
        type: "START_ORDER"
    }
}

export const finishOrder = () => {
    return {
        type: "FINISH_ORDER"
    }
}

export const getActiveOrders = shopperId => async dispatch => {
    const response = await rails.get(`/orders?status=active`).catch(error => console.log(error))

    let data = response.data.data
    data.forEach(order => {
        const order_items = 
        dispatch({type: "GET_ACTIVE_ORDER", payload: {
            
        }})
    })
    dispatch({ type: "GET_ACTIVE_ORDERS", payload: data })
}

// ORDER_ITEMS 

export const getOrderItems = (order_id) => async dispatch => {
    const response = await rails.get(`order_items?order_id=${order_id}`)
    let data = response.data.data
    let order_items = data.map((item) => {
        return item.attributes
    })
    dispatch({ type: "GET_ORDER_ITEMS", payload: order_items})
}

export const changeOrderItemStatus = (id) => async dispatch =>  {
    const response = await rails.patch(`order_items/${id}`, {
        
    })
}
//LOCATION

export const getLocation = () => async dispatch => {
    let response = {
        lng: '',
        ltd: ''
    }
    dispatch({ type: 'GET_LOCATION', payload: response})
}

export const storeLocation = (lat, lng) => async dispatch => {
    let coords = {
        'lat': lat,
        'lng': lng
    }

    dispatch({type: 'STORE_LOCATION', payload: coords})
}
