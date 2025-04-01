import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'3337730814eb486ea80fe1cf844be12c'
    }
})