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

// const getMoviesFromApiAsync = async () => {
//     try {
//         let response = await fetch(
//             'https://reactnative.dev/movies.json'
//         );
//         let json = await response.json();
//         return json.movies;
//     } catch (error) {
//         console.error(error);
//     }
// };

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
    console.log(response.data)
    dispatch({ type: "GET_ORDER_ITEMS", payload: response.data.data })
}

//LOCATION

export const getLocation = () => async dispatch => {
    let response = {
        lng: '',
        ltd: ''
    }
    dispatch({ type: 'GET_LOCATION', payload: response})
}
