import axios from 'axios'

// let driverToken = localStorage.getItem('driver_token')
// let cartToken = localStorage.getItem('cart_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    // "Authorization": driverToken
}

export default axios.create({
    baseURL: 'http://192.168.:3000',
    headers: headers
})