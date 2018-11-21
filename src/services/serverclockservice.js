import axios from 'axios'

export default() => {
  return axios.create({    
    baseURL: `https://localhost:44338/api/customers/time`,    
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      //'Access-Control-Allow-Origin': '*'
    }
  })
}