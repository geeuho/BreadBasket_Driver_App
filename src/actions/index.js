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
    dispatch({ type: "GET_ACTIVE_ORDERS", payload: data })
}

// ORDER_ITEMS 

export const getOrderItems = (order_id) => async dispatch => {
    const response = await rails.get(`order_items?order_id=${order_id}`)
    let data = response.data.data
    let order_items = data.map((item) => {
        return item
    })
    dispatch({ type: "GET_ORDER_ITEMS", payload: order_items})
}

export const updateOrderItems = (order_id) => async dispatch => {
    let response = await rails.get(`order_items?order_id=${order_id}`)
    let data = response.data.data
    //todo_items have status of pending, refund_request, replacement_request
    let todo_items = data.filter(item => 
        item.attributes.status === 'pending' || item.attributes.status === 'refund_request' ||item.attributes.status === 'replacement_request'
    )
    // //review_items have status of refund_pending, replaced_pending
    let review_items = data.filter(item => 
        item.attributes.status === 'refund_pending' || item.attributes.status === 'replacement_pending'
    )
    // //completed_items have status of found, replaced, refunded
    let completed_items = data.filter(item => 
        item.attributes.status === 'found' || item.attributes.status === 'refunded' || item.attributes.status === 'replaced'
    )

    console.log(data)
    console.log(todo_items, "TODO")
    console.log(completed_items, "COMPLETED")

    return {
        type: "UPDATE_ORDER_ITEMS",
        payload: {
            orderId: orderId, 
            todo_items: todo_items,
            review_items: review_items,
            completed_items: completed_items
        }
    }
}


export const changeOrderItemStatus = (id, status) => async dispatch =>  {
    const response = await rails.patch(`order_items/${id}`, {
        status: status
    })
    console.log(response)
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
