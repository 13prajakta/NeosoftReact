import axios from 'axios'
export let orderdetail = () => {
    let url = "https://apibyashu.herokuapp.com/api/cakeorders"
    return (dispatch) => {
        dispatch()
        return axios.get(url).header(localStorage.token).then(
            (response) => {
                dispatch({type:'ORDERS',payload:response.data})
            },
            (err) => {
                console.log(err);
            }
        )
    }
}
