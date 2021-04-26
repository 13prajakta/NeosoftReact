// import axios from "axios"
// import {call,put ,takeEvery} from "redux-saga/effects"

// function address(action)
// {
//     return axios({
//         method:"post",
//         url:"https://apibyashu.herokuapp.com/api/addcakeorder",
//         data:action.payload,
//         headers:{
//             authtoken:localStorage.token
//           } 
//     })
// }

// function* AddressGenrator(action){
//     var result =yield call(address,action)
//     console.log("address api resulttttttttttt",result)
//     if(result.data.authtoken){
//         yield put({type:'ADDRESS_SUCCESS',payload:result.data})
//         console.log("address success",result)
//     }
//     else{
//         yield put({type:'ADDRESS_FAILURE'})
//     }
// }

// export function* AddressSaga(){
//     yield takeEvery('ADDRESS' , AddressGenrator)
// }