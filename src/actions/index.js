import rails from '../api/Rails'
import axios from 'axios'

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

export const getStores = () => dispatch => {
    rails.get('/stores')
    .then((response)=> response.json())
    
    console.log(response.data, 'called')
    dispatch({ type: 'GET_STORES', payload: response.data.data })
}


// ORDERS

export const getActiveOrders = shopperId => async dispatch => {
    const response = await rails.get(`/orders?shopper_id=${shopperId}&status=active`).catch(error => console.log(error))
    let data = response.data.data
    dispatch({ type: "GET_ACTIVE_ORDERS", payload: data })
}

// ORDER_ITEMS 

export const getOrderItems = (order_id) => async dispatch => {
    const response = await rails.get(`order_items?order_id=${order_id}`)
    console.log(response.data)
    dispatch({ type: "GET_ORDER_ITEMS", payload: response.data.data })
}

// ITEMS

export const getItems = (store_id) => async dispatch => {
    const response = await rails.get(`/items?store_id=${store_id}`)
    console.log(response.data, "items")
    dispatch({ type: 'GET_ITEMS', payload: response.data })
}

