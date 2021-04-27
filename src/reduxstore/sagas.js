import axios from "axios"
import {all, call,put ,takeEvery} from "redux-saga/effects"

function login(action)
{
    return axios({
        method:"post",
        url:"https://apibyashu.herokuapp.com/api/login",
        data:action.payload
    })
}

function* LoginGenrator(action){
    var result =yield call(login,action)

    if(result.data.token){
        yield put({type:'LOGIN_SUCCESS',payload:result.data})
        localStorage.setItem('token', result.data.token);
    }
    else{
        yield put({type:'LOGIN_FAILURE'})
    }
}

function address(action)
{
    var token = localStorage.token
    return axios({
        method:"post",
        url:"https://apibyashu.herokuapp.com/api/addcakeorder",
        data:action.payload,
        headers:{
            authtoken:token
          }
    })
}
function* AddressGenrator(action){
    var result =yield call(address,action)
console.log("result of address saga",result.data)
    if(result.data.cart?.length>0){
        yield put({type:'ADDRESS_SUCC',payload:result.data})
        //localStorage.setItem('token', result.data.token);
    }
    else{
        yield put({type:'ADDRESS_FAILC'})
    }
}


export function* LoginSaga(){
    yield takeEvery('LOGIN' , LoginGenrator)
}

export function* AddressSaga(){
    yield takeEvery('ADDRESS' , AddressGenrator)
}

export function* RootSaga(){
    yield all([LoginSaga(),AddressSaga()])
}