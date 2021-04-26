import axios from "axios"
import {call,put ,takeEvery} from "redux-saga/effects"

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

export function* LoginSaga(){
    yield takeEvery('LOGIN' , LoginGenrator)
}

